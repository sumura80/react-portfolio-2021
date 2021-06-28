import React, { useState } from "react";
import { Jobsdata } from "./Jobsdata";
import { BiCheckCircle,BiBuildings,BiMemoryCard } from "react-icons/bi";
import { RiMoneyCnyCircleLine } from "react-icons/ri";
import { BsPersonBoundingBox } from "react-icons/bs";

const JobSearch = () => {
  const [value, setValue] = useState(0);
  const [jobs, setJobs] = useState(Jobsdata);
  const { company, title, salary, descriptions, category, jobimg } =
    jobs[value];
  return (
    <div className="container jobsearchWrap">
      <hr />
      <div className="job-search-title">
        <h3 className="mb-4">⑦仕事検索</h3>
      </div>
      <div className="row">
        <div className="jobLeftbox col-sm-3">
          <div className="btn-container d-flex flex-column">
            {Jobsdata.map((jobname, index) => {
              return (
                <button
                  onClick={() => setValue(index)}
                  className={`btn btn-outline-info mb-2 ${index === value && 'jobBtnActive'}`}
                  key={jobname.id}
                >
                  {jobname.category}
                </button>
              );
            })}
          </div>
        </div>
        <div className="jobRightbox col-sm-9">
          <div className="jobInfo">
            <div className="companyName"><span className="jobIcon"><BiBuildings/></span>
            <span className="jobSize">{company}</span>
            </div>
            <div className="jobTitle "><span className="jobIcon"><BsPersonBoundingBox /></span>  <span className="jobSize">{title}</span></div>
            <div className="jobImg mt-3">
              <img src={jobimg} alt="jobimg" className="img-fluid jobimgsize" />
            </div>
            <div className="salary mt-3"><RiMoneyCnyCircleLine className="jobIcon"/>{salary}</div>
            <div className="jobDescriptionTitle my-3"><span className="jobIcon"><BiMemoryCard　/></span><span className="jobSize">仕事内容</span></div>
            <div className="jobDescription">
              {descriptions.map((task, index) => {
                return (
                  <div className="jobTask" key={index}>
                    <p>
                      <span className="text-info mr-2">
                        <BiCheckCircle />
                      </span>
                      {task}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default JobSearch;
