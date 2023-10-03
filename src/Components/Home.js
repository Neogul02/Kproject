import React from 'react';
import './homestyle.css';

import img_1 from 'https://web.kangnam.ac.kr/common/plugin/syworks.design.library/template/portal/images/map/127.jpg';
import img_2 from '../img/천은관.jpg';

export function Home() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <img src={'https://web.kangnam.ac.kr/common/plugin/syworks.design.library/template/portal/images/map/127.jpg'} alt="샬롬관" className="homeImage" />
              <div>샬롬관 블룸즈버리</div>
            </td>
            <td>
              <img src={img_2} alt="천은관" className="homeImage" />
              <div>후생관 블룸즈버리</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
