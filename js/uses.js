/**
 * <div class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
        <div class="w-full lg:w-1/4">
            <div class="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                <div class="flex flex-row items-center justify-between">
                    <div class="flex flex-col">
                        <div class="text-xs uppercase font-light text-gray-500">
                            Technology
                        </div>
                        <div class="text-xl font-bold">
                            React
                        </div>
                    </div>
                    <ion-icon name="logo-react"></ion-icon>
                </div>
            </div>
        </div>
        ...
    </div>
 */

// const uses = {
//   frontend: [
//     { name: "React", color: "blue-400", text: "gray-100" },
//     "JavaScript",
//     "Tailwind",
//     "Bootstrap",
//     "Sass",
//     "HTML/CSS",
//   ],
//   backend: [
//     "PHP",
//     "NodeJS",
//     "Laravel",
//     "TypeScript",
//     "Flask",
//     "Java",
//     "Play Framework",
//   ],
//   database: ["MySQL", "MongoDB"],
//   devops: ["Docker", "Nginx", "Apache", "Jenkins"],
//   tools: [
//     "VSCode",
//     "Insomnia",
//     "Chrome Canary",
//     "Windows 10 Insider",
//     "GitHub",
//     "GitLab",
//     "Linux",
//   ],
//   misc: {
//     code: ["Firebase", "Prettier", "Chocolatey"],
//     communication: ["Discord", "Telegram", "OnePlus 6T"],
//     music: ["FL Studio 20"],
//   },
// };

const uses = [
  {
    name: "React",
    color: "blue-400",
    text: "gray-100",
    type: "Front-end",
    icon: "logo-react",
  },
  {
    name: "JavaScript",
    color: "yellow-400",
    text: "gray-800",
    type: "Front-end",
    icon: "logo-javascript",
  },
  {
    name: "Tailwind",
    color: "blue-400",
    text: "gray-100",
    type: "Front-end",
    icon: null,
    svg: `<svg width="256px" height="154px" class="w-12 h-12" viewBox="0 0 256 154" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
      <defs>
      <linearGradient x1="-2.77777778%" y1="32%" x2="100%" y2="67.5555556%" id="linearGradient-1">
      <stop stop-color="currentColor" offset="0%"></stop>
      <stop stop-color="currentColor" offset="100%"></stop>
      </linearGradient>
      </defs>
      <g>
      <path d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z" fill="url(#linearGradient-1)"></path>
      </g>
      </svg>
      
      `,
  },
  {
    name: "Bootstrap",
    color: "purple-900",
    text: "gray-100",
    type: "Front-end",
    icon: null,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bootstrap-fill w-12 h-12" viewBox="0 0 16 16">
        <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/>
        <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"/>
        </svg>`,
  },
  {
    name: "Sass",
    color: "pink-500",
    text: "gray-100",
    type: "Front-end",
    icon: "logo-sass",
  },
  {
    name: "Laravel",
    color: "red-600",
    text: "gray-100",
    type: "Back-end",
    icon: "logo-laravel",
    large:true
  },
  {
    name: "NodeJS",
    color: "green-400",
    text: "gray-100",
    type: "Back-end",
    icon: "logo-nodejs",
  },
  {
    name: "PHP",
    color: "purple-400",
    text: "gray-100",
    type: "Back-end",
    icon: null,
    svg: `<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="php" class="w-12 h-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"></path></svg>`,
  },
  //   {
  //     name: "TypeScript",
  //     color: "yellow-400",
  //     text: "gray-800",
  //     type: "Back-end",
  //     icon: null,
  //     svg: `<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" viewBox="0 0 400 400" width="2500" height="2500"><path fill="currentColor" d="M0 200V0h400v400H0"/><path fill-opacity="0" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"/></svg>`,
  //   },
  {
    name: "Docker",
    color: "blue-600",
    text: "gray-100",
    type: "DevOps",
    icon: "logo-docker",
  },
  {
    name: "Chrome Canary",
    color: "yellow-500",
    text: "gray-100",
    type: "Tools",
    icon: "logo-chrome",
  },{
    name: "Discord",
    color: "purple-900",
    text: "gray-100",
    type: "Tools",
    icon: null,
    extra: "Floriaaan#1992",
    svg: `<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" class="w-12 h-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path></svg>`
  },
  {
    name: "FL Studio 20",
    color: "yellow-500",
    text: "gray-100",
    type: "Misceallaneous",
    icon: null,
    svg: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve" class="w-12 h-12">
    <g><g  fill="currentColor" transform="translate(0.000000,252.000000) scale(0.100000,-0.100000)"><path fill="currentColor" d="M6744.7,2238.1C6295.1,1902.9,5502.5,850,5427.5,499c-31.5-153.8-138-138-228.7,31.6c-94.6,181.4-418,461.4-650.7,571.8c-540.3,256.3-1064.7,252.4-1597.1-11.8c-449.5-228.7-899.1-792.6-954.3-1202.8c-35.5-252.4,19.7-268.2,583.7-149.8c457.4,94.6,1380.2,224.8,1407.8,197.2c7.9-7.9-7.9-185.4-35.5-398.3c-43.4-339.2-39.4-433.8,19.7-721.7c82.8-402.2,177.5-599.4,390.4-820.3c197.2-205,469.3-307.6,709.8-272.1c394.3,59.2,938.6,492.9,1159.4,914.9c67.1,130.1,138,212.9,177.5,212.9c35.5,0,228.7-181.4,433.8-398.3c824.2-899.1,812.4-887.3,887.3-840c130.1,74.9,252.4,386.5,276,694.1c39.4,528.4-149.8,1021.4-540.3,1411.8c-414.1,414.1-875.5,579.7-1470.9,536.3l-354.9-27.6l19.7,193.2c39.4,402.2,544.2,1198.8,1072.6,1687.8c173.5,161.7,303.7,299.7,295.8,311.5C7016.8,2427.4,6890.6,2344.6,6744.7,2238.1z"/><path d="M3112.8-455.3c-185.4-35.5-252.4-71-347.1-181.4c-272.1-327.3-477.1-981.9-666.4-2153.1c-118.3-733.5-145.9-2086.1-59.2-2693.4c67.1-453.5,212.9-974.1,339.1-1230.4c122.3-236.6,422-536.3,611.2-611.2c698-264.2,1664.2,429.9,2642.1,1896.8c378.6,567.9,800.5,1352.6,1056.8,1963.9C6878.8-3006.8,7072-2431,7072-2316.7c0,59.2-110.4,220.8-299.7,433.8l-295.8,339.2L6326.7-1733c-603.4-761.1-1281.6-1021.3-1865.3-709.8c-232.6,122.2-489,402.2-631,682.2c-110.4,216.9-189.3,631-189.3,997.7v362.8l-145.9-3.9C3412.4-408,3242.9-427.7,3112.8-455.3z"/></g></g>
    </svg>`,
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(uses);
const usesGrid = document.getElementById("uses_grid");

uses.map((el, key) => {
  let div = document.createElement("div");
  div.innerHTML = `<div class="widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800 hover:bg-${
    el.color
  } hover:text-${el.text} transition duration-300 flex items-center" style="height: 94px">
        <div class="flex flex-row flex-grow items-center justify-between">
            <div class="hidden sm:flex md:flex lg:flex xl:flex flex-col">
                <div class="text-xs uppercase font-light">
                ${el.type}
                </div>
                <div class="text-xl font-bold">
                    ${el.name}
                </div>
                ${el.extra ? `<div class="text-xs">${el.extra}</div>` : ""}
            </div>
                ${
                  el.icon
                    ? `<ion-icon name="${el.icon}" class="w-12 h-12"></ion-icon>`
                    : el.svg
                }
        </div>
    </div>`;
  usesGrid.appendChild(div);
});
