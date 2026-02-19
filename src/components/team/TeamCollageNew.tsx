import Image from 'next/image';

// import Escape1 from "../../../public/images/new-team-images/new/escape_room_img-1.webp";
// import Escape2 from "../../../public/images/new-team-images/new/escape_room_img-2.webp";
// import Escape3 from "../../../public/images/new-team-images/new/escape_room_img-3.webp";
// import Escape4 from "../../../public/images/new-team-images/new/escape_room_img-4.webp";
// import TeamMission1 from "../../../public/images/new-team-images/new/jenga_puzzle-play-1.webp";
// import TeamMission2 from "../../../public/images/new-team-images/new/jenga_puzzle-play-2.webp";
// import TeamMission3 from "../../../public/images/new-team-images/new/jenga_puzzle-play-3.webp";
// import TeamMission4 from "../../../public/images/new-team-images/new/jenga_puzzle-play-4.webp";
// import EightYears1 from "../../../public/images/new-team-images/new/bitpastel-turn-8-1.webp";
// import EightYears2 from "../../../public/images/new-team-images/new/bitpastel-turn-8-2.webp";
// import EightYears3 from "../../../public/images/new-team-images/new/bitpastel-turn-8-3.webp";
// import EightYears4 from "../../../public/images/new-team-images/new/bitpastel-turn-8-4.webp";
// import Christmas1 from "../../../public/images/new-team-images/new/christmas-celebration-at-office-2024-1.webp";
// import Christmas2 from "../../../public/images/new-team-images/new/christmas-celebration-at-office-2024-2.webp";
// import EthnicDay1 from "../../../public/images/new-team-images/new/ethnic-day-celeb-1.webp";
// import EthnicDay2 from "../../../public/images/new-team-images/new/ethnic-day-celeb-2.webp";
// import BirthdayDay1 from "../../../public/images/new-team-images/new/birthday-celeb-office-1.webp";
// import BirthdayDay2 from "../../../public/images/new-team-images/new/birthday-celeb-office-2.webp";
// import BirthdayDay3 from "../../../public/images/new-team-images/new/birthday-celeb-office-3.webp";
// import BirthdayDay4 from "../../../public/images/new-team-images/new/birthday-celeb-office-4.webp";
// import WorkAnniversary1 from "../../../public/images/new-team-images/new/work-anniversary-celeb-2024-1.webp";
// import WorkAnniversary2 from "../../../public/images/new-team-images/new/work-anniversary-celeb-2024-2.webp";
// import WorkAnniversary3 from "../../../public/images/new-team-images/new/work-anniversary-celeb-2024-3.webp";
// import WorkAnniversary4 from "../../../public/images/new-team-images/new/work-anniversary-celeb-2024-4.webp";
// import TeamMeetup1 from "../../../public/images/new-team-images/new/team-meetup-1.webp";
// import TeamMeetup2 from "../../../public/images/new-team-images/new/team-meetup-2.webp";
// import TownHall1 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-1.webp";
// import TownHall2 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-2.webp";
// import TownHall3 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-3.webp";
// import TownHall4 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-4.webp";
// import TownHall5 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-5.webp";
// import TownHall6 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-6.webp";
// import TownHall7 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-7.webp";
// import TownHall8 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-8.webp";
// import TownHall9 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-9.webp";
// import TownHall10 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-10.webp";
// import TownHall11 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-11.webp";
// import TownHall12 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-12.webp";
// import TownHall13 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-13.webp";
// import TownHall14 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-14.webp";
// import TownHall15 from "../../../public/images/new-team-images/new/bitpastel-townhall-2024-15.webp";
// import TownHall20231 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-1.webp";
// import TownHall20232 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-2.webp";
// import TownHall20233 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-3.webp";
// import TownHall20234 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-4.webp";
// import TownHall20235 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-5.webp";
// import TownHall20236 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-6.webp";
// import TownHall20237 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-7.webp";
// import TownHall20238 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-8.webp";
// import TownHall20239 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-9.webp";
// import TownHall202310 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-10.webp";
// import TownHall202311 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-11.webp";
// import TownHall202312 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-12.webp";
// import TownHall202313 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-13.webp";
// import TownHall202314 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-14.webp";
// import TownHall202315 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-15.webp";
// import TownHall202316 from "../../../public/images/new-team-images/new/bitpastel-townhall-2023-16.webp";
// import Culture1 from "../../../public/images/new-team-images/new/culture-1.webp";
// import Culture2 from "../../../public/images/new-team-images/new/culture-2.webp";
// import YearEnd1 from "../../../public/images/new-team-images/new/year-end-celeb-2022-1.webp";
// import YearEnd2 from "../../../public/images/new-team-images/new/year-end-celeb-2022-2.webp";
// import YearEnd3 from "../../../public/images/new-team-images/new/year-end-celeb-2022-3.webp";
// import YearEnd4 from "../../../public/images/new-team-images/new/year-end-celeb-2022-4.webp";
// import YearEnd5 from "../../../public/images/new-team-images/new/year-end-celeb-2022-5.webp";
// import Westin1 from "../../../public/images/new-team-images/new/sunday-brunch-westin-1.webp";
// import Westin2 from "../../../public/images/new-team-images/new/sunday-brunch-westin-2.webp";
// import TownHall20221 from "../../../public/images/new-team-images/new/bitpastel-townhall-2022-1.webp";
// import TownHall20222 from "../../../public/images/new-team-images/new/bitpastel-townhall-2022-2.webp";
// import TownHall20223 from "../../../public/images/new-team-images/new/bitpastel-townhall-2022-3.webp";
// import TownHall20224 from "../../../public/images/new-team-images/new/bitpastel-townhall-2022-4.webp";
// import TownHall20211 from "../../../public/images/new-team-images/new/bitpastel-townhall-2021-1.webp";
// import TownHall20212 from "../../../public/images/new-team-images/new/bitpastel-townhall-2021-2.webp";

import EthnicDay2025_1 from '../../../public/images/new-team-images/Team page updated new/Ethnic day 2025/Frame 98.webp';
import EthnicDay2025_2 from '../../../public/images/new-team-images/Team page updated new/Ethnic day 2025/Frame 97.webp';
import IndependenceDay2025_1 from '../../../public/images/new-team-images/Team page updated new/Independenceday 2025/Frame 34.webp';
import IndependenceDay2025_2 from '../../../public/images/new-team-images/Team page updated new/Independenceday 2025/Frame 36.webp';
import IndependenceDay2025_3 from '../../../public/images/new-team-images/Team page updated new/Independenceday 2025/Frame 8.webp';
import BirthdayCelebration2025_1 from '../../../public/images/new-team-images/Team page updated new/Birthday celebration 2025/Frame 25.webp';
import BirthdayCelebration2025_2 from '../../../public/images/new-team-images/Team page updated new/Birthday celebration 2025/Frame 28.webp';
import BirthdayCelebration2025_3 from '../../../public/images/new-team-images/Team page updated new/Birthday celebration 2025/Frame 27.webp';
import BirthdayCelebration2025_4 from '../../../public/images/new-team-images/Team page updated new/Birthday celebration 2025/Frame 26.webp';
import BirthdayCelebration2025_5 from '../../../public/images/new-team-images/Team page updated new/Birthday celebration 2025/Frame 31.webp';
import BirthdayCelebration2025_6 from '../../../public/images/new-team-images/Team page updated new/Birthday celebration 2025/Frame 32.webp';
import Escape1 from '../../../public/images/new-team-images/Team page updated new/Escape room/Frame 8.webp';
import Escape2 from '../../../public/images/new-team-images/Team page updated new/Escape room/Frame 14.webp';
import Escape3 from '../../../public/images/new-team-images/new/escape_room_img-3.webp';
import Escape4 from '../../../public/images/new-team-images/new/escape_room_img-4.webp';
import TeamMission1 from '../../../public/images/new-team-images/Team page updated new/Interactive team mission/Frame 15.webp';
import TeamMission2 from '../../../public/images/new-team-images/Team page updated new/Interactive team mission/Frame 16.webp';
import TeamMission3 from '../../../public/images/new-team-images/Team page updated new/Interactive team mission/Frame 17.webp';
import TeamMission4 from '../../../public/images/new-team-images/Team page updated new/Interactive team mission/Frame 18.webp';
import EightYears1 from '../../../public/images/new-team-images/Team page updated new/Bitpastel turns 8/Frame 8.webp';
import EightYears2 from '../../../public/images/new-team-images/Team page updated new/Bitpastel turns 8/Frame 19.webp';
import EightYears3 from '../../../public/images/new-team-images/Team page updated new/Bitpastel turns 8/Frame 20.webp';
import EightYears4 from '../../../public/images/new-team-images/Team page updated new/Bitpastel turns 8/Frame 21.webp';
import IceBracker1 from '../../../public/images/new-team-images/Team page updated new/Icebreaker/Frame 23-1.webp';
import IceBracker2 from '../../../public/images/new-team-images/Team page updated new/Icebreaker/Frame 23.webp';
import Christmas1 from '../../../public/images/new-team-images/Team page updated new/Christmas celebration at office/Frame 24.webp';
import Christmas2 from '../../../public/images/new-team-images/Team page updated new/Christmas celebration at office/Frame 25.webp';
import EthnicDay2024_1 from '../../../public/images/new-team-images/new/ethnic-day-celeb-1.webp';
import EthnicDay2024_2 from '../../../public/images/new-team-images/new/ethnic-day-celeb-2.webp';
import BirthdayDay1 from '../../../public/images/new-team-images/new/birthday-celeb-office-1.webp';
import BirthdayDay2 from '../../../public/images/new-team-images/new/birthday-celeb-office-2.webp';
import BirthdayDay3 from '../../../public/images/new-team-images/new/birthday-celeb-office-3.webp';
import BirthdayDay4 from '../../../public/images/new-team-images/new/birthday-celeb-office-4.webp';
import WorkAnniversary1 from '../../../public/images/new-team-images/new/work-anniversary-celeb-2024-1.webp';
import WorkAnniversary2 from '../../../public/images/new-team-images/new/work-anniversary-celeb-2024-2.webp';
import WorkAnniversary3 from '../../../public/images/new-team-images/new/work-anniversary-celeb-2024-3.webp';
import WorkAnniversary4 from '../../../public/images/new-team-images/new/work-anniversary-celeb-2024-4.webp';
import TeamMeetup1 from '../../../public/images/new-team-images/Team page updated new/Team meet up/Frame 39.webp';
import TeamMeetup2 from '../../../public/images/new-team-images/Team page updated new/Team meet up/Frame 89 (1).webp';
import TownHall2024_1 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Group 211.webp';
import TownHall2024_2 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 40.webp';
import TownHall2024_3 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 41.webp';
import TownHall2024_4 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 43.webp';
import TownHall2024_5 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 44.webp';
import TownHall2024_6 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 45.webp';
import TownHall2024_7 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 46.webp';
import TownHall2024_8 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 47.webp';
import TownHall2024_9 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 48.webp';
import TownHall2024_10 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 49.webp';
import TownHall2024_11 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 75.webp';
import TownHall2024_12 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 76.webp';
import TownHall2024_13 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 77.webp';
import TownHall2024_14 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 78.webp';
import TownHall2024_15 from '../../../public/images/new-team-images/Team page updated new/Townhall 2024/Frame 89.webp';

import TownHall2023_1 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 52.webp';
import TownHall2023_2 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 50.webp';
import TownHall2023_3 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 51.webp';
import TownHall2023_4 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 55.webp';
import TownHall2023_5 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 53.webp';
import TownHall2023_6 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 54.webp';
import TownHall2023_7 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 58.webp';
import TownHall2023_8 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 56.webp';
import TownHall2023_9 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 57.webp';
import TownHall2023_10 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 80.webp';
import TownHall2023_11 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 81.webp';
import TownHall2023_12 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 82.webp';
import TownHall2023_13 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 83.webp';
import TownHall2023_14 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 85.webp';
import TownHall2023_15 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 84.webp';
import TownHall2023_16 from '../../../public/images/new-team-images/Team page updated new/Townhall 2023/Frame 86.webp';

import Culture1 from '../../../public/images/new-team-images/Team page updated new/culture at bitpastel/Frame 59.webp';
import Culture2 from '../../../public/images/new-team-images/Team page updated new/culture at bitpastel/Frame 60.webp';

import YearEnd2022_1 from '../../../public/images/new-team-images/Team page updated new/Year end celebration 2022/Frame 61.webp';
import YearEnd2022_2 from '../../../public/images/new-team-images/Team page updated new/Year end celebration 2022/Frame 62.webp';
import YearEnd2022_3 from '../../../public/images/new-team-images/Team page updated new/Year end celebration 2022/Frame 87.webp';
import YearEnd2022_4 from '../../../public/images/new-team-images/Team page updated new/Year end celebration 2022/Frame 63.webp';
import YearEnd2022_5 from '../../../public/images/new-team-images/Team page updated new/Year end celebration 2022/Frame 64.webp';

import Westin1 from '../../../public/images/new-team-images/Team page updated new/sunday brunch at westin/Frame 67.webp';
import Westin2 from '../../../public/images/new-team-images/Team page updated new/sunday brunch at westin/Frame 68.webp';

import TownHall2022_1 from '../../../public/images/new-team-images/Team page updated new/Townhall 2022/Frame 69.webp';
import TownHall2022_2 from '../../../public/images/new-team-images/Team page updated new/Townhall 2022/Frame 70.webp';
import TownHall2022_3 from '../../../public/images/new-team-images/Team page updated new/Townhall 2022/Frame 71.webp';
import TownHall2022_4 from '../../../public/images/new-team-images/Team page updated new/Townhall 2022/Frame 72.webp';

import TownHall2021_1 from '../../../public/images/new-team-images/Team page updated new/townhall 2021/Frame 73.webp';
import TownHall2021_2 from '../../../public/images/new-team-images/Team page updated new/townhall 2021/Frame 74.webp';

import X_max_1 from '../../../public/images/new-team-images/Team page slicing/X-mas 2025/X-mas-1.webp';
import X_max_2 from '../../../public/images/new-team-images/Team page slicing/X-mas 2025/X-mas-2.webp';
import X_max_3 from '../../../public/images/new-team-images/Team page slicing/X-mas 2025/X-mas-3.webp';
import X_max_4 from '../../../public/images/new-team-images/Team page slicing/X-mas 2025/X-mas-4.webp';

// TownHall 2026

import TH1 from '../../../public/images/TownHall2026/TH1.webp';
import TH111 from '../../../public/images/TownHall2026/TH1.png';
import TH2 from '../../../public/images/TownHall2026/TH2.webp';
import TH3 from '../../../public/images/TownHall2026/TH3.webp';
import TH4 from '../../../public/images/TownHall2026/TH4.webp';
import TH5 from '../../../public/images/TownHall2026/TH5.webp';
import TH6 from '../../../public/images/TownHall2026/TH6.webp';
import TH7 from '../../../public/images/TownHall2026/TH7.webp';
import TH8 from '../../../public/images/TownHall2026/TH8.webp';
import TH9 from '../../../public/images/TownHall2026/TH9.webp';
import TH10 from '../../../public/images/TownHall2026/TH10.webp';
import TH11 from '../../../public/images/TownHall2026/TH11.webp';
import TH12 from '../../../public/images/TownHall2026/TH12.webp';
import TH13 from '../../../public/images/TownHall2026/TH13.webp';
import TH14 from '../../../public/images/TownHall2026/TH14.webp';
import TH15 from '../../../public/images/TownHall2026/TH15.webp';
import TH16 from '../../../public/images/TownHall2026/TH16.webp';
import TH17 from '../../../public/images/TownHall2026/TH17.webp';
import TH18 from '../../../public/images/TownHall2026/TH18.webp';
import TH19 from '../../../public/images/TownHall2026/TH19.webp';

import Picnic1 from '../../../public/images/Picnic2026/Picnic1.webp';
import Picnic2 from '../../../public/images/Picnic2026/Picnic2.webp';
import Picnic3 from '../../../public/images/Picnic2026/Picnic3.webp';
import Picnic4 from '../../../public/images/Picnic2026/Picnic4.webp';
import Picnic5 from '../../../public/images/Picnic2026/Picnic5.webp';
import Picnic6 from '../../../public/images/Picnic2026/Picnic6.webp';
import Picnic7 from '../../../public/images/Picnic2026/Picnic7.webp';
import Picnic8 from '../../../public/images/Picnic2026/Picnic8.webp';
import Picnic9 from '../../../public/images/Picnic2026/Picnic9.webp';
import Picnic10 from '../../../public/images/Picnic2026/Picnic10.webp';
import Picnic11 from '../../../public/images/Picnic2026/Picnic11.webp';
import Picnic12 from '../../../public/images/Picnic2026/Picnic12.webp';
import Picnic13 from '../../../public/images/Picnic2026/Picnic13.webp';

const TeamCollageNew = () => {
  ``;

  return (
    <section className='team-members'>
      <div className='container mx-auto px-4'>
        <div className='team-college'>
          <h2 className='text-[20px] font-[700] pb-4 pt-4'>Bitpastel Offsite 2026</h2>

          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={Picnic1}
              alt='TownHall 2026'
              width={1200}
              height={600}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={Picnic2}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={Picnic3}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={Picnic4}
              alt='TownHall 2026'
              width={1200}
              height={600}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={Picnic5}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={Picnic6}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={Picnic7}
              alt='TownHall 2026'
              width={1200}
              height={600}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={Picnic8}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={Picnic9}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={Picnic10}
              alt='TownHall 2026'
              width={1200}
              height={600}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={Picnic11}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={Picnic12}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={Picnic13}
              alt='TownHall 2026'
              width={1200}
              height={600}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Bitpastel Townhall 2026</h2>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TH111}
              alt='TownHall 2026'
              width={1200}
              height={600}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TH2}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={TH3}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TH4}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={TH5}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TH6}
              alt='TownHall 2026'
              width={1200} // REPLACE with actual intrinsic width
              height={600} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TH7}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={TH8}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TH9}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={TH10}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TH11}
              alt='TownHall 2026'
              width={1200} // REPLACE with actual intrinsic width
              height={600} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TH12}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={TH13}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TH14}
              alt='TownHall 2026'
              width={1200} // REPLACE with actual intrinsic width
              height={600} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TH15}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={TH16}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TH17}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
            <Image
              src={TH18}
              alt='TownHall 2026'
              width={600} // REPLACE with actual intrinsic width
              height={400} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TH19}
              alt='TownHall 2026'
              width={1200} // REPLACE with actual intrinsic width
              height={600} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Christmas Celebration at Office 2025</h2>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={X_max_1}
              alt='Independence Day Celebration with team members 2025'
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            {/* IMPORTANT: Replace width and height with the actual intrinsic dimensions of your images */}
            <Image
              src={X_max_2}
              alt='Independence Day Celebration with team members 2025'
              width={1200} // REPLACE with actual intrinsic width of this image
              height={900} // REPLACE with actual intrinsic height of this image
              className='w-full object-cover' // w-full makes it responsive, object-cover maintains aspect ratio
            />
            <Image
              src={X_max_3}
              alt='Independence Day Celebration with team members 2025'
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1'>
            <Image
              src={X_max_4}
              alt='Independence Day Celebration with team members 2025'
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Ethnic Day Celebration at Office 2025</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            {/* IMPORTANT: Replace width and height with the actual intrinsic dimensions of your images */}
            <Image
              src={EthnicDay2025_1}
              alt='Ethnic Day Celebration with team members 2025'
              width={1200} // REPLACE with actual intrinsic width of this image
              height={900} // REPLACE with actual intrinsic height of this image
              quality={100} // Set image quality to 100%
              className='w-full object-cover' // w-full makes it responsive, object-cover maintains aspect ratio
            />
            <Image
              src={EthnicDay2025_2}
              alt='Ethnic Day Celebration with team members 2025'
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Independence Day 2025</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            {/* IMPORTANT: Replace width and height with the actual intrinsic dimensions of your images */}
            <Image
              src={IndependenceDay2025_1}
              alt='Independence Day Celebration with team members 2025'
              width={1200} // REPLACE with actual intrinsic width of this image
              height={900} // REPLACE with actual intrinsic height of this image
              quality={100} // Set image quality to 100%
              className='w-full object-cover' // w-full makes it responsive, object-cover maintains aspect ratio
            />
            <Image
              src={IndependenceDay2025_2}
              alt='Independence Day Celebration with team members 2025'
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1'>
            <Image
              src={IndependenceDay2025_3}
              alt='Independence Day Celebration with team members 2025'
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Escape Rooms</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            {/* IMPORTANT: Replace width and height with the actual intrinsic dimensions of your images */}
            <Image
              src={Escape1}
              alt='escape room with team members'
              width={1200} // REPLACE with actual intrinsic width of this image
              height={900} // REPLACE with actual intrinsic height of this image
              quality={100} // Set image quality to 100%
              className='w-full object-cover' // w-full makes it responsive, object-cover maintains aspect ratio
            />
            <Image
              src={Escape2}
              alt='escape room with team members'
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              quality={100}
              className='w-full object-cover'
            />
            {/* <Image
              src={Escape3}
              alt="escape room with team members"
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src={Escape4}
              alt="escape room with team members"
              width={1200} // REPLACE with actual intrinsic width
              height={900} // REPLACE with actual intrinsic height
              quality={100}
              className="w-full object-top" // Original object-top preserved
            /> */}
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Interactive Team Mission</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={TeamMission1}
              alt='Jenga Puzzle Playing team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TeamMission2}
              alt='Jenga Puzzle Playing team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TeamMission3}
              alt='Jenga Puzzle Playing team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TeamMission4}
              alt='Jenga Puzzle Playing team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Birthday Celebration 2025</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={BirthdayCelebration2025_1}
              alt='Birthday Celebration at Office with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={BirthdayCelebration2025_2}
              alt='Birthday Celebration at Office with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={BirthdayCelebration2025_3}
              alt='Birthday Celebration at Office with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={BirthdayCelebration2025_4}
              alt='Birthday Celebration at Office with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={BirthdayCelebration2025_5}
              alt='Birthday Celebration at Office with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={BirthdayCelebration2025_6}
              alt='Birthday Celebration at Office with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Bitpastel turns 8</h2>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={EightYears1}
              alt='Bitpastel Turns 8 year Celebration'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={EightYears2}
              alt='Bitpastel Turns 8 year Celebration'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={EightYears3}
              alt='Bitpastel Turns 8 year Celebration'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1'>
            <Image
              src={EightYears4}
              alt='Bitpastel Turns 8 year Celebration'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>
        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Ice Breaker - Coffee Evening</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={IceBracker1}
              alt='Ice Breaker - Coffee Evening team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={IceBracker2}
              alt='Ice Breaker - Coffee Evening team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Christmas Celebration at Office 2024</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={Christmas1}
              alt='Christmas Celebration at Office 2024 with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={Christmas2}
              alt='Christmas Celebration at Office 2024 with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Ethnic Day Celebration at Office 2024</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={EthnicDay2024_1}
              alt='Ethnic Day Celebration at Office 2024 with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={EthnicDay2024_2}
              alt='Ethnic Day Celebration at Office 2024 with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Birthday Day Celebration at Office</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={BirthdayDay1}
              alt='Birthday Celebration at Office with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            {/* <Image
              src={BirthdayDay2}
              alt="Birthday Celebration at Office with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            />
            <Image
              src={BirthdayDay3}
              alt="Birthday Celebration at Office with team members"
              width={1200}
              height={900}
              quality={100}
              className="w-full object-cover"
            /> */}
            <Image
              src={BirthdayDay4}
              alt='Birthday Celebration at Office with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>
            Work Anniversary Celebration at Office 2024
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={WorkAnniversary1}
              alt='Work Anniversary Celebration at Office 2024 with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={WorkAnniversary2}
              alt='Work Anniversary Celebration at Office 2024 with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={WorkAnniversary3}
              alt='Work Anniversary Celebration at Office 2024 with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={WorkAnniversary4}
              alt='Work Anniversary Celebration at Office 2024 with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Team Meetup #Movie #Coffee</h2>
          <div className='grid grid-cols-1 md:grid-cols-1 gap-2'>
            <Image
              src={TeamMeetup1}
              alt='Team Meetup #Movie #Coffee'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TeamMeetup2}
              alt='Team Meetup #Movie #Coffee'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Bitpastel Townhall 2024</h2>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TownHall2024_1}
              alt='Bitpastel Townhall 2024 cover'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TownHall2024_2}
              alt='Bitpastel Townhall cake cutting with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2024_3}
              alt='Bitpastel Townhall 2024 CEO Speech'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TownHall2024_4}
              alt='Bitpastel Townhall 2024 cover'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TownHall2024_5}
              alt='Bitpastel Townhall cake cutting with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2024_6}
              alt='Bitpastel Townhall 2024 CEO Speech'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TownHall2024_7}
              alt='Bitpastel Townhall 2024 cover'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TownHall2024_8}
              alt='Bitpastel Townhall cake cutting with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2024_9}
              alt='Bitpastel Townhall 2024 CEO Speech'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TownHall2024_10}
              alt='Bitpastel Townhall 2024 cover'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TownHall2024_11}
              alt='Bitpastel Townhall cake cutting with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2024_12}
              alt='Bitpastel Townhall 2024 CEO Speech'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2024_13}
              alt='Bitpastel Townhall 2024 cover'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2024_14}
              alt='Bitpastel Townhall cake cutting with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TownHall2024_15}
              alt='Bitpastel Townhall 2024 CEO Speech'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Bitpastel Townhall 2023</h2>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TownHall2023_1}
              alt='Bitpastel Townhall 2023 cover'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TownHall2023_2}
              alt='Bitpastel Townhall cake cutting with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2023_3}
              alt='Bitpastel Townhall 2024 CEO Speech'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TownHall2023_4}
              alt='Bitpastel Townhall 2024 cover'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TownHall2023_5}
              alt='Bitpastel Townhall cake cutting with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2023_6}
              alt='Bitpastel Townhall 2024 CEO Speech'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TownHall2023_7}
              alt='Bitpastel Townhall 2024 cover'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TownHall2023_8}
              alt='Bitpastel Townhall cake cutting with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2023_9}
              alt='Bitpastel Townhall 2024 CEO Speech'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2023_10}
              alt='Bitpastel Townhall 2024 cover'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2023_11}
              alt='Bitpastel Townhall cake cutting with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 mb-2'>
            <Image
              src={TownHall2023_12}
              alt='Bitpastel Townhall 2024 CEO Speech'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={TownHall2023_13}
              alt='Bitpastel Townhall 2024 cover'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2023_14}
              alt='Bitpastel Townhall cake cutting with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2023_15}
              alt='Bitpastel Townhall 2024 CEO Speech'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2023_16}
              alt='Bitpastel Townhall 2024 CEO Speech'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Culture at Bitpastel</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={Culture1}
              alt='Bitpastel Townhall 2023 cover'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={Culture2}
              alt='Bitpastel Townhall 2023 cover'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Year-end Celebration 2022</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-2'>
            <Image
              src={YearEnd2022_1}
              alt='Year-end Celebration 2022 with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={YearEnd2022_2}
              alt='Year-end Celebration 2022 with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 gap-2 mb-2'>
            <Image
              src={YearEnd2022_3}
              alt='Year-end Celebration 2022 with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={YearEnd2022_4}
              alt='Year-end Celebration 2022 with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />

            <Image
              src={YearEnd2022_5}
              alt='Year-end Celebration 2022 with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Sunday Brunch at Westin</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={Westin1}
              alt='Sunday Brunch at Westin with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={Westin2}
              alt='Sunday Brunch at Westin with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>
        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Bitpastel Townhall 2022</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={TownHall2022_1}
              alt='Bitpastel Townhall 2022 with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2022_2}
              alt='Bitpastel Townhall 2022 with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2022_3}
              alt='Bitpastel Townhall 2022 with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2022_4}
              alt='Bitpastel Townhall 2022 with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>

        <div className='team-collage'>
          <h2 className='text-[20px] font-[700] pb-4'>Bitpastel Townhall 2021</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <Image
              src={TownHall2021_1}
              alt='Bitpastel Townhall 2021 with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
            <Image
              src={TownHall2021_2}
              alt='Bitpastel Townhall 2021 with team members'
              width={1200}
              height={900}
              quality={100}
              className='w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCollageNew;
