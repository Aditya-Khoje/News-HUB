import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Mat Smith",
      title:
        "The Morning After: Apple preps software update to address iPhone 12 radiation concerns",
      description:
        "Apple is prepping a software update for the three-year-old iPhone 12s after French regulators alleged the phone exceeds proper radiation levels. France stopped selling the smartphone after recommendations from the country’s radiation watchdog (ANFR).The softw…",
      url: "https://www.engadget.com/the-morning-after-apple-preps-software-update-to-address-iphone-12-radiation-concerns-111610283.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/HCNrBDBjxCuQqIooVhzagw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NjM-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/79a0dc60-5603-11ee-bbbf-3c8afa272e4e",
      publishedAt: "2023-09-18T11:16:10Z",
      content:
        "Apple is prepping a software update for the three-year-old iPhone 12s after French regulators alleged the phone exceeds proper radiation levels. France stopped selling the smartphone after recommenda… [+3239 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "techkritiko@gmail.com (Jay Bonggolto)",
      title:
        "OnePlus' upcoming budget Android tablet appears in marketing renders",
      description:
        "The OnePlus Pad Go has appeared in new marketing renders showing off a similar design to the regular model, but presumably with less powerful hardware.",
      url: "https://www.androidcentral.com/tablets/oneplus-pad-go-marketing-renders",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/tshfp5oTUSgpJo8JYbKp33-1200-80.jpg",
      publishedAt: "2023-09-18T06:19:32Z",
      content:
        "<ul><li>The OnePlus Pad Go will apparently have a similar design to the regular OnePlus Pad, but with stripped-down hardware.</li><li>The tablet will supposedly be focused on entertainment with a 2.4… [+2680 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Joe Rossignol",
      title:
        "Apple Says 128GB iPhone 15 Pro Limited to 1080p ProRes Video Recording Unless External Storage Connected",
      description:
        "ProRes video recording remains limited to 1080p quality at 30 frames per second on the 128GB model of the iPhone 15 Pro, unless the device is recording directly to a connected external storage drive, according to Apple. On the 256GB and higher models, ProRes …",
      url: "https://www.macrumors.com/2023/09/18/iphone-15-pro-128gb-prores-1080p-only/",
      urlToImage:
        "https://images.macrumors.com/t/NL4l6iHxp0S0F_C3evm831s7d_U=/2880x/article-new/2023/09/iPhone-15-Pro-lineup.jpg",
      publishedAt: "2023-09-18T12:54:27Z",
      content:
        "ProRes video recording remains limited to 1080p quality at 30 frames per second on the 128GB model of the iPhone 15 Pro, unless the device is recording directly to a connected external storage drive,… [+1448 chars]",
    },
  ];
  constructor() {
    super();
    // console.log("Hi i am constructor form news component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h1>Top Headlines</h1>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title.slice(30)}
                    description={element.description.slice(0, 80)}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
