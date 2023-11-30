import React from 'react'
import {useState, useEffect} from 'react';
import MatchList from '../MatchList/MatchList';
// import MissionList from '../components/Profile/MissionList';
import classes from './FetchAll.module.css';
const FetchAll = () => {
    const[matchData,setMatchData]=useState([]);
//   const[isLoading, setIsLoading]=useState(false)

 const liveData = [
        {
            "matchId": 17,
            "teamHeading": "Bangladesh vs New Zealand,",
            "matchNumberVenue": "1st Test Today  - Today  •  at Sylhet, Sylhet International Cricket Stadium",
            "battingTeam": "NZ",
            "battingTeamScore": "217-5",
            "bowlTeam": "BAN",
            "bowlTeamScore": "310",
            "liveText": "Day 2: 3rd Session - New Zealand trail by 93 runs",
            "matchLink": "/live-cricket-scores/73869/ban-vs-nz-1st-test-new-zealand-tour-of-bangladesh-2023",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:42.833+00:00"
        },
        {
            "matchId": 18,
            "teamHeading": "Nigeria vs Zimbabwe,",
            "matchNumberVenue": "16th Match Today  •  at Windhoek, United Cricket Club Ground",
            "battingTeam": "NGA",
            "battingTeamScore": "110-8 (20 Ovs)",
            "bowlTeam": "ZIM",
            "bowlTeamScore": "",
            "liveText": "Innings Break",
            "matchLink": "/live-cricket-scores/83179/nga-vs-zim-16th-match-icc-mens-t20-world-cup-africa-region-qualifier-2023",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:42.844+00:00"
        },
        {
            "matchId": 19,
            "teamHeading": "Tanzania vs Rwanda,",
            "matchNumberVenue": "17th Match Today  •  at Windhoek, Wanderers Cricket Ground",
            "battingTeam": "TAN",
            "battingTeamScore": "153-8 (20 Ovs)",
            "bowlTeam": "RWA",
            "bowlTeamScore": "",
            "liveText": "Innings Break",
            "matchLink": "/live-cricket-scores/83181/tan-vs-rwa-17th-match-icc-mens-t20-world-cup-africa-region-qualifier-2023",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:42.856+00:00"
        },
        {
            "matchId": 27,
            "teamHeading": "Uttar Pradesh vs Gujarat,",
            "matchNumberVenue": "Round 4, Group D Today  •  at Chandigarh, Sector 16 Stadium",
            "battingTeam": "GUJ",
            "battingTeamScore": "101-3 (16 Ovs)",
            "bowlTeam": "UP",
            "bowlTeamScore": "232-8 (50 Ovs)",
            "liveText": "Gujarat need 132 runs",
            "matchLink": "/live-cricket-scores/75017/up-vs-guj-round-4-group-d-vijay-hazare-trophy-2023",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:42.866+00:00"
        },
        {
            "matchId": 28,
            "teamHeading": "Bengal vs Madhya Pradesh,",
            "matchNumberVenue": "Round 4, Group E Today  •  at Thane, Dadoji Konddev Stadium",
            "battingTeam": "MP",
            "battingTeamScore": "32-3 (12 Ovs)",
            "bowlTeam": "BEN",
            "bowlTeamScore": "254-8 (50 Ovs)",
            "liveText": "Madhya Pradesh need 223 runs",
            "matchLink": "/live-cricket-scores/75056/ben-vs-mp-round-4-group-e-vijay-hazare-trophy-2023",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:42.876+00:00"
        },
        {
            "matchId": 29,
            "teamHeading": "Odisha vs Saurashtra,",
            "matchNumberVenue": "Round 4, Group A Today  •  at Bengaluru, M.Chinnaswamy Stadium",
            "battingTeam": "SAUR",
            "battingTeamScore": "102-6 (24.4 Ovs)",
            "bowlTeam": "ODSA",
            "bowlTeamScore": "99 (29.1 Ovs)",
            "liveText": "",
            "matchLink": "",
            "textComplete": "Saurashtra won by 4 wkts",
            "status": "COMPLETED",
            "date": "2023-11-29T09:28:42.886+00:00"
        },
        {
            "matchId": 30,
            "teamHeading": "Meghalaya vs Maharashtra,",
            "matchNumberVenue": "Round 4, Group B Today  •  at Jaipur, Sawai Mansingh Stadium",
            "battingTeam": "MAH",
            "battingTeamScore": "41-3 (10 Ovs)",
            "bowlTeam": "MGLY",
            "bowlTeamScore": "227 (47.5 Ovs)",
            "liveText": "Maharashtra need 187 runs",
            "matchLink": "/live-cricket-scores/75031/mgly-vs-mah-round-4-group-b-vijay-hazare-trophy-2023",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:42.899+00:00"
        },
        {
            "matchId": 31,
            "teamHeading": "Assam vs Himachal Pradesh,",
            "matchNumberVenue": "Round 4, Group D Today  •  at Chandigarh, Government Model Senior Secondary School, Sector 26",
            "battingTeam": "HP",
            "battingTeamScore": "122-2 (16.3 Ovs)",
            "bowlTeam": "ASM",
            "bowlTeamScore": "121 (33.3 Ovs)",
            "liveText": "",
            "matchLink": "",
            "textComplete": "Himachal Pradesh won by 8 wkts",
            "status": "COMPLETED",
            "date": "2023-11-29T09:28:42.910+00:00"
        },
        {
            "matchId": 32,
            "teamHeading": "Tamil Nadu vs Baroda,",
            "matchNumberVenue": "Round 4, Group E Today  •  at Mumbai, Sharad Pawar Cricket Academy BKC",
            "battingTeam": "TN",
            "battingTeamScore": "162 (33.3 Ovs)",
            "bowlTeam": "BRD",
            "bowlTeamScore": "124 (23.2 Ovs)",
            "liveText": "",
            "matchLink": "",
            "textComplete": "Tamil Nadu won by 38 runs",
            "status": "COMPLETED",
            "date": "2023-11-29T09:28:42.922+00:00"
        },
        {
            "matchId": 33,
            "teamHeading": "Jammu and Kashmir vs Delhi,",
            "matchNumberVenue": "Round 4, Group C Today  •  at Vallabh Vidyanagar, Anand, ADSA Railways Cricket Ground",
            "battingTeam": "DEL",
            "battingTeamScore": "72-2 (17 Ovs)",
            "bowlTeam": "JK",
            "bowlTeamScore": "299-7 (50 Ovs)",
            "liveText": "Delhi need 228 runs",
            "matchLink": "/live-cricket-scores/74986/jk-vs-del-round-4-group-c-vijay-hazare-trophy-2023",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:42.933+00:00"
        },
        {
            "matchId": 34,
            "teamHeading": "Sikkim vs Railways,",
            "matchNumberVenue": "Round 4, Group A Today  •  at Alur, KSCA Cricket Ground",
            "battingTeam": "RLYS",
            "battingTeamScore": "73-2 (16 Ovs)",
            "bowlTeam": "SKM",
            "bowlTeamScore": "103 (44 Ovs)",
            "liveText": "Railways need 31 runs",
            "matchLink": "/live-cricket-scores/75021/skm-vs-rlys-round-4-group-a-vijay-hazare-trophy-2023",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:42.947+00:00"
        },
        {
            "matchId": 35,
            "teamHeading": "Chhattisgarh vs Manipur,",
            "matchNumberVenue": "Round 4, Group B Today  •  at Jaipur, KL Saini Ground",
            "battingTeam": "MNP",
            "battingTeamScore": "67-0 (16 Ovs)",
            "bowlTeam": "CG",
            "bowlTeamScore": "342-6 (50 Ovs)",
            "liveText": "Manipur need 276 runs",
            "matchLink": "/live-cricket-scores/75063/cg-vs-mnp-round-4-group-b-vijay-hazare-trophy-2023",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:42.958+00:00"
        },
        {
            "matchId": 36,
            "teamHeading": "Haryana vs Mizoram,",
            "matchNumberVenue": "Round 4, Group C Today  •  at Ahmedabad, Sardar Patel Stadium B Ground",
            "battingTeam": "MIZ",
            "battingTeamScore": "28-1 (9 Ovs)",
            "bowlTeam": "HAR",
            "bowlTeamScore": "315-6 (50 Ovs)",
            "liveText": "Mizoram need 288 runs",
            "matchLink": "/live-cricket-scores/74996/har-vs-miz-round-4-group-c-vijay-hazare-trophy-2023",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:42.973+00:00"
        },
        {
            "matchId": 37,
            "teamHeading": "Punjab vs Goa,",
            "matchNumberVenue": "Round 4, Group E Today  •  at Mumbai, Brabourne Stadium",
            "battingTeam": "GOA",
            "battingTeamScore": "55-2 (15 Ovs)",
            "bowlTeam": "PUN",
            "bowlTeamScore": "289 (49.3 Ovs)",
            "liveText": "Goa need 235 runs",
            "matchLink": "/live-cricket-scores/75038/pun-vs-goa-round-4-group-e-vijay-hazare-trophy-2023",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:42.987+00:00"
        },
        {
            "matchId": 20,
            "teamHeading": "Puducherry vs Mumbai,",
            "matchNumberVenue": "Round 4, Group A Today  •  at Alur, KSCA Cricket (2) Ground",
            "battingTeam": "MUM",
            "battingTeamScore": "69-3 (12.3 Ovs)",
            "bowlTeam": "PDC",
            "bowlTeamScore": "67 (24.4 Ovs)",
            "liveText": "",
            "matchLink": "",
            "textComplete": "Mumbai won by 7 wkts",
            "status": "COMPLETED",
            "date": "2023-11-29T09:28:42.999+00:00"
        },
        {
            "matchId": 21,
            "teamHeading": "Hyderabad vs Services,",
            "matchNumberVenue": "Round 4, Group B Today  •  at Jaipur, Dr Soni Stadium",
            "battingTeam": "SER",
            "battingTeamScore": "46-3 (15 Ovs)",
            "bowlTeam": "HYD",
            "bowlTeamScore": "210 (50 Ovs)",
            "liveText": "Services need 165 runs",
            "matchLink": "/live-cricket-scores/75052/hyd-vs-ser-round-4-group-b-vijay-hazare-trophy-2023",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:43.009+00:00"
        },
        {
            "matchId": 22,
            "teamHeading": "Chandigarh vs Uttarakhand,",
            "matchNumberVenue": "Round 4, Group C Today  •  at Ahmedabad, Gujarat College Ground",
            "battingTeam": "UTK",
            "battingTeamScore": "92-0 (17 Ovs)",
            "bowlTeam": "CDG",
            "bowlTeamScore": "302-8 (50 Ovs)",
            "liveText": "Uttarakhand need 211 runs",
            "matchLink": "/live-cricket-scores/74989/cdg-vs-utk-round-4-group-c-vijay-hazare-trophy-2023",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:43.021+00:00"
        },
        {
            "matchId": 23,
            "teamHeading": "Rajasthan vs Andhra,",
            "matchNumberVenue": "Round 4, Group D Today  •  at Chandigarh, Mahajan Cricket Academy Ground, I.T. Park",
            "battingTeam": "AP",
            "battingTeamScore": "46-0 (12 Ovs)",
            "bowlTeam": "RAJ",
            "bowlTeamScore": "290 (50 Ovs)",
            "liveText": "Andhra need 245 runs",
            "matchLink": "/live-cricket-scores/75028/raj-vs-ap-round-4-group-d-vijay-hazare-trophy-2023",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:43.033+00:00"
        },
        {
            "matchId": 24,
            "teamHeading": "Bihar vs Karnataka,",
            "matchNumberVenue": "Round 4, Group C Today  •  at Ahmedabad, Narendra Modi Stadium A Ground",
            "battingTeam": "KAR",
            "battingTeamScore": "100-2 (21 Ovs)",
            "bowlTeam": "BIH",
            "bowlTeamScore": "217-7 (50 Ovs)",
            "liveText": "Karnataka need 118 runs",
            "matchLink": "/live-cricket-scores/75070/bih-vs-kar-round-4-group-c-vijay-hazare-trophy-2023",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:43.049+00:00"
        },
        {
            "matchId": 25,
            "teamHeading": "Kerala vs Tripura,",
            "matchNumberVenue": "Round 4, Group A Today  •  at Alur, KSCA Cricket (3) Ground",
            "battingTeam": "TRI",
            "battingTeamScore": "33-3 (9 Ovs)",
            "bowlTeam": "KER",
            "bowlTeamScore": "231 (47.1 Ovs)",
            "liveText": "Tripura need 199 runs",
            "matchLink": "/live-cricket-scores/75003/ker-vs-tri-round-4-group-a-vijay-hazare-trophy-2023",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:43.060+00:00"
        },
        {
            "matchId": 26,
            "teamHeading": "Jharkhand vs Vidarbha,",
            "matchNumberVenue": "Round 4, Group B Today  •  at Jaipur, Jaipuria Vidyalaya Ground",
            "battingTeam": "VID",
            "battingTeamScore": "111-0 (13.4 Ovs)",
            "bowlTeam": "JHKD",
            "bowlTeamScore": "107 (33.1 Ovs)",
            "liveText": "",
            "matchLink": "",
            "textComplete": "Vidarbha won by 10 wkts",
            "status": "COMPLETED",
            "date": "2023-11-29T09:28:43.069+00:00"
        },
        {
            "matchId": 39,
            "teamHeading": "Wellington vs Northern Knights,",
            "matchNumberVenue": "5th Match Today  •  at Hamilton, Seddon Park",
            "battingTeam": "NK",
            "battingTeamScore": "199-4 (32.4 Ovs)",
            "bowlTeam": "WEL",
            "bowlTeamScore": "198 (49.4 Ovs)",
            "liveText": "",
            "matchLink": "",
            "textComplete": "Northern Knights won by 6 wkts",
            "status": "COMPLETED",
            "date": "2023-11-29T09:28:43.079+00:00"
        },
        {
            "matchId": 6,
            "teamHeading": "Canterbury vs Central Districts,",
            "matchNumberVenue": "6th Match Today  •  at New Plymouth, Pukekura Park",
            "battingTeam": "CD",
            "battingTeamScore": "280-6 (48.5 Ovs)",
            "bowlTeam": "CNTB..",
            "bowlTeamScore": "278 (46.4 Ovs)",
            "liveText": "",
            "matchLink": "",
            "textComplete": "Central Districts won by 4 wkts",
            "status": "COMPLETED",
            "date": "2023-11-29T09:28:43.091+00:00"
        },
        {
            "matchId": 38,
            "teamHeading": "Otago vs Auckland,",
            "matchNumberVenue": "4th Match Today  •  at Christchurch, Hagley Oval",
            "battingTeam": "AKL",
            "battingTeamScore": "274-3 (46.3 Ovs)",
            "bowlTeam": "OTG",
            "bowlTeamScore": "268-7 (50 Ovs)",
            "liveText": "",
            "matchLink": "",
            "textComplete": "Auckland won by 7 wkts",
            "status": "COMPLETED",
            "date": "2023-11-29T09:28:43.101+00:00"
        },
        {
            "matchId": 40,
            "teamHeading": "South Africa A vs West Indies A,",
            "matchNumberVenue": "2nd unofficial Test Today  - Today  •  at East London, Buffalo Park",
            "battingTeam": "WIA",
            "battingTeamScore": "9-0",
            "bowlTeam": "RSAA",
            "bowlTeamScore": "298",
            "liveText": "Day 2: 1st Session - West Indies A trail by 289 runs",
            "matchLink": "/live-cricket-scores/81165/rsaa-vs-wia-2nd-unofficial-test-west-indies-a-tour-of-south-africa-2023",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:43.114+00:00"
        },
        {
            "matchId": 42,
            "teamHeading": "Queensland vs Western Australia,",
            "matchNumberVenue": "18th Match Today  - Today  •  at Brisbane, The Gabba",
            "battingTeam": "WA",
            "battingTeamScore": "2-0",
            "bowlTeam": "QL",
            "bowlTeamScore": "274-8 d",
            "liveText": "Day 2: Stumps - Western Australia trail by 272 runs",
            "matchLink": "/live-cricket-scores/79223/ql-vs-wa-18th-match-sheffield-shield-2023-24",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:43.123+00:00"
        },
        {
            "matchId": 43,
            "teamHeading": "New South Wales vs Tasmania,",
            "matchNumberVenue": "16th Match Today  - Today  •  at Sydney, Sydney Cricket Ground",
            "battingTeam": "TAS",
            "battingTeamScore": "166-6",
            "bowlTeam": "NSW",
            "bowlTeamScore": "224",
            "liveText": "Day 2: Stumps - Tasmania trail by 58 runs",
            "matchLink": "/live-cricket-scores/79209/nsw-vs-tas-16th-match-sheffield-shield-2023-24",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:43.134+00:00"
        },
        {
            "matchId": 41,
            "teamHeading": "Victoria vs South Australia,",
            "matchNumberVenue": "17th Match Today  - Today  •  at Adelaide, Adelaide Oval",
            "battingTeam": "VIC",
            "battingTeamScore": "278 & 12-1",
            "bowlTeam": "SAUS",
            "bowlTeamScore": "252",
            "liveText": "Day 2: Stumps - Victoria lead by 38 runs",
            "matchLink": "/live-cricket-scores/79216/vic-vs-saus-17th-match-sheffield-shield-2023-24",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:43.142+00:00"
        },
        {
            "matchId": 44,
            "teamHeading": "Brisbane Heat Women vs Perth Scorchers Women,",
            "matchNumberVenue": "Challenger Today  •  at Perth, W.A.C.A. Ground",
            "battingTeam": "BRHW",
            "battingTeamScore": "83-2 (9.5 Ovs)",
            "bowlTeam": "PRSW",
            "bowlTeamScore": "",
            "liveText": "Brisbane Heat Women opt to bat",
            "matchLink": "/live-cricket-scores/83636/brhw-vs-prsw-challenger-womens-big-bash-league-2023",
            "textComplete": "",
            "status": "LIVE",
            "date": "2023-11-29T09:28:43.153+00:00"
        }
    ]

  useEffect(()=>{
    setMatchData(liveData);

    // setIsLoading(true);
    // fetch('https://api.spacexdata.com/v3/launches')
    // .then(respose=>{
    //   setIsLoading(false);
    //   return respose.json();
    // })
    // .then(result=>{
    //   const transformedData = result.map(missionData =>{
    //     return{
    //       image:missionData.links.mission_patch,
    //       mission_name:missionData.mission_name,
    //       mission_id:missionData.mission_id,
    //       launch_year:missionData.launch_year,
    //       successful_launch:missionData.launch_success,
    //       details:missionData.details
    //     };
    //   });
    //   setMission(transformedData);
    // });
  },[])
  console.log(matchData);
  return (
    <div  className={classes.container}>
    {/* {isLoading && (
      <p className={classes.loading}>Loading...</p>
    )}
    {!isLoading && ( */}
     <MatchList data={matchData} />
    {/* )} */}
  </div>
  )
}

export default FetchAll