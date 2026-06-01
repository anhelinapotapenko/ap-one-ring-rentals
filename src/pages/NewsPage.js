import React from "react";

import image05 from "../images/building05.jpg";
import image06 from "../images/building06.jpg";
import image07 from "../images/building07.jpg";

function NewsPage() {
  return (
    <div id="wrapper">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="main col-sm-12">
              <h1 className="section-title">Latest News</h1>
              <div className="grid-style1 clearfix">
                <div className="item col-md-4">
                  <div className="image">
                    <a href="#">
                      <span className="btn btn-default">
                        <i className="fa fa-file-o"></i> Read More
                      </span>
                    </a>
                    <img src={image05} alt="" />
                  </div>
                  <div className="tag">
                    <i className="fa fa-file-text"></i>
                  </div>
                  <div className="info-blog">
                    <div className="title">
                      New Rental Regulations Announced
                    </div>
                    <div className="text">
                      The government has announced new rental regulations
                      effective from next month. Find out how this impacts you.
                    </div>
                    <span className="meta">
                      <div className="author">
                        <i className="fa fa-user"></i> Admin
                      </div>
                      <div className="date">
                        <i className="fa fa-clock-o"></i> 2024-08-08
                      </div>
                    </span>
                  </div>
                </div>
                <div className="item col-md-4">
                  <div className="image">
                    <a href="#">
                      <div className="btn btn-default">
                        <i className="fa fa-file-o"></i> Read More
                      </div>
                    </a>
                    <img src={image06} alt="" />
                  </div>
                  <div className="tag">
                    <i className="fa fa-file-text"></i>
                  </div>
                  <div className="info-blog">
                    <div className="title">
                      Top 10 Rental Properties in Sydney
                    </div>
                    <div className="text">
                      Explore our list of the top 10 rental properties in Sydney
                      for the month of August.
                    </div>
                    <span className="meta">
                      <div className="author">
                        <i className="fa fa-user"></i> Admin
                      </div>
                      <span className="date">
                        <i className="fa fa-clock-o"></i> 2024-08-07
                      </span>
                    </span>
                  </div>
                </div>
                <div className="item col-md-4">
                  <div className="image">
                    <a href="#">
                      <span className="btn btn-default">
                        <i className="fa fa-file-o"></i> Read More
                      </span>
                    </a>
                    <img src={image07} alt="" />
                  </div>
                  <div className="tag">
                    <i className="fa fa-file-text"></i>
                  </div>
                  <div className="info-blog">
                    <div className="title">
                      Customer Stories: Finding the Perfect Home
                    </div>
                    <div className="text">
                      Read our customer stories about their journey to finding
                      the perfect home through One Ring Rentals.
                    </div>
                    <span className="meta">
                      <div className="author">
                        <i className="fa fa-user"></i> Admin
                      </div>
                      <div className="date">
                        <i className="fa fa-clock-o"></i> 2024-08-06
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewsPage;
