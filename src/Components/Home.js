import React from 'react';
import './homestyle.css';

import img_1 from '../img/MainImg/샬롬관.jpg';
import img_2 from '../img/MainImg/천은관.jpg';

const Home = () =>{
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <img src={img_1} alt="샬롬관" className="homeImage" />
              <div>샬롬관 블룸즈버리</div>
            </td>
            <td>
              <img src={img_2} alt="천은관" className="homeImage" />
              <div>천은관 블룸즈버리</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
