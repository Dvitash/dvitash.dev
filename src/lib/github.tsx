import { clamp } from "./utils";

export interface ContributionData {
  opacity: number;
  count: number;
  date: string;
}

const TOKEN = process.env.GITHUB_TOKEN;
const MOBILE_LENGTH = 210;
const INTENSITY = 0.75;
const QUERY = `
query($userName:String!) {
	user(login: $userName){
		contributionsCollection {
			contributionCalendar {
				weeks {
					contributionDays {
						contributionCount
						date
					}
				}
			}
		}
	}
}`;
const VARIABLES = `
{
	"userName": "Dvitash"
}`;

function getDummyData(length?: number): Array<ContributionData> {
  length = length || 360;

  const data: Array<ContributionData> = [];
  const today = new Date();
  today.setDate(today.getDate() - length);

  for (let i = 0; i < length; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    data.push({
      opacity: Math.random(),
      count: Math.floor(Math.random() * 10),
      date: date.toISOString().split("T")[0],
    });
  }

  return data;
}

function getData(mobile?: boolean, data?: Array<ContributionData>): Array<ContributionData> {
  if (data) {
    if (!mobile) {
      if (data.length != 0) {
        return data;
      } else {
        return getDummyData();
      }
    } else {
      if (data.length != 0) {
        return data.slice(0, MOBILE_LENGTH);
      } else {
        return getDummyData(MOBILE_LENGTH);
      }
    }
  } else {
    if (!mobile) {
      return getDummyData();
    } else {
      return getDummyData(MOBILE_LENGTH);
    }
  }
}

export async function fetchContributions(mobile?: boolean): Promise<Array<ContributionData>> {
  const response: any = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      query: QUERY,
      variables: VARIABLES,
    }),
    next: {
      revalidate: 600,
    },
  }).catch(() => {
    return null;
  });

  if (!response) {
    return getData(mobile);
  }

  const json = await response.json();

  if (!json || json.message) {
    return getData(mobile);
  }

  const {
    data: {
      user: {
        contributionsCollection: {
          contributionCalendar: { _, weeks },
        },
      },
    },
  } = json;
  const data: Array<ContributionData> = [];
  let max = 0;

  Object.keys(weeks).forEach((i) => {
    const week = weeks[i].contributionDays;

    Object.keys(week).forEach((j) => {
      const day = week[j];

      data.push({
        count: day.contributionCount,
        date: day.date,
        opacity: 0,
      });

      if (max < day.contributionCount) {
        max = day.contributionCount;
      }
    });
  });

  data.reverse();
  max *= INTENSITY;

  data.forEach((value, index) => {
    data[index].opacity = clamp(value.count / max, 0, 1);
  });

  return getData(mobile, data);
}

export function getContributions(mobile?: boolean): Array<number> {
  const element = document.getElementById("githubContributions");
  const data: Array<number> = [];
  let max = 0;

  if (element) {
    for (const child of element.children as HTMLCollectionOf<HTMLElement>) {
      const innerDiv = child.querySelector('div[style*="opacity"]') as HTMLElement;
      if (innerDiv) {
        const opacity = Number(innerDiv.style.opacity);
        data.push(opacity);

        if (max < opacity) {
          max = opacity;
        }
      }
    }
  }

  if (data.length === 0) {
    const dummy = getDummyData(mobile ? MOBILE_LENGTH : undefined);
    return dummy.map((d) => d.opacity);
  }

  return data;
}
