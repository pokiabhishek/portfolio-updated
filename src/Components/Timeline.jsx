import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaGraduationCap } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  return (
    <div className='Timeline'>
      <VerticalTimeline lineColor='#212121'>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<FaGraduationCap />}
          date={<span style={{ color: '#fff'}}>2017 - 2018</span>}
        >
          <h3 className="vertical-timeline-element-title">10th Grade</h3>
          <h1 className='text-2xl font-semibold'>Yeshodham high school</h1>
          <h1 className='font-bold text-right text-xl'>81%</h1>
        </VerticalTimelineElement>
        

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<FaGraduationCap />}
          date={<span style={{ color: '#fff' }}>2018 - 2020</span>}
        >
          <h3 className="vertical-timeline-element-title">12th Grade</h3>
          <h1 className='text-2xl font-semibold'>Duraga devi saraf college</h1>
          <p>Science</p>
          <h1 className='font-bold text-right text-xl'>47%</h1>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<FaGraduationCap />}
          date={<span style={{ color: '#fff' }}>2021 - 2023</span>}
        >
          <h3 className="vertical-timeline-element-title">15th</h3>
          <h1 className='text-[25px] font-semibold'>Nirmala Memorial Foundation College</h1>
          <p>Bsc computer science</p>
          <h1 className='font-bold text-right text-xl'>73%</h1>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
