import { clamp } from "./utils";

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
					}
				}
			}
		}
	}
}`;
const VARIABLES = `
{
	"userName": "DervexDev"
}`;

function getDummyData(length?: number): Array<number> {
  length = length || 360;

  const data: Array<number> = [];

  for (let i = 0; i < length; i++) {
    data.push(Math.random());
  }

  return data;
}

function getData(mobile?: boolean, data?: Array<number>): Array<number> {
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

export async function fetchContributions(mobile?: boolean): Promise<Array<number>> {
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
  const data: Array<number> = [];
  let max = 0;

  Object.keys(weeks).forEach((i) => {
    const week = weeks[i].contributionDays;

    Object.keys(week).forEach((j) => {
      const day = week[j].contributionCount;

      data.push(day);

      if (max < day) {
        max = day;
      }
    });
  });

  data.reverse();
  max *= INTENSITY;

  data.forEach((value, index) => {
    data[index] = clamp(value / max, 0, 1);
  });

  return getData(mobile, data);
}

export function getContributions(mobile?: boolean): Array<number> {
  const element = document.getElementById("githubContributions");
  const data: Array<number> = [];
  let max = 0;

  if (element) {
    for (const child of element.children as HTMLCollectionOf<HTMLElement>) {
      const opacity = Number(child.style.opacity);

      data.push(opacity);

      if (max < opacity) {
        max = opacity;
      }
    }
  }

  return getData(mobile, data);
}
