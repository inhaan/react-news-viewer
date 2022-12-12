import { Article } from "./interfaces";

const sample: { [key: string]: Article[] } = {
  all: [
    {
      source: { id: null, name: "Hani.co.kr" },
      author: null,
      title: "거리두기 해제됐지만…“자영업 매출 작년보다 줄어” - 한겨레",
      description:
        "음식·도소매업 68% “매출 줄어”53% “내년도 올해보다 감소” 전망",
      url: "https://www.hani.co.kr/arti/economy/economy_general/1071208.html",
      urlToImage:
        "https://flexible.img.hani.co.kr/flexible/normal/800/533/imgdb/original/2022/1212/20221212501513.jpg",
      publishedAt: "2022-12-12T04:15:09Z",
      content: ":2022-12-12 13:15 :2022-12-12 13:27",
    },
    {
      source: { id: null, name: "Hankyung.com" },
      author: null,
      title: "검찰, '6000만원 수수' 노웅래 의원 구속영장 - 한국경제",
      description:
        "검찰, '6000만원 수수' 노웅래 의원 구속영장, 뇌물수수·정치자금법 위반·알선뇌물수수 혐의",
      url: "https://www.hankyung.com/politics/article/2022121298437",
      urlToImage: "https://img.hankyung.com/photo/202212/ZN.31841390.1.jpg",
      publishedAt: "2022-12-12T03:42:46Z",
      content:
        "9 () . ‘ ’ . . 1( ) . . 2013 2 2020 10 24000 . 35200 1 . 2 1 (428) () . 2013 7~2018 1 210 ( ) . 9 () . 2019 9~2020 10 6000 . 10, 7 . . 33 ‘ ’ . ‘ ’ . “ , ” . . . . onebell@hankyung.com",
    },
    {
      source: { id: null, name: "Munhwa.com" },
      author: null,
      title: "그라운드 장악한 '영건 4인방'… 4강은 그대들의 무대 - 문화일보",
      description:
        "프랑스 추아메니, 공격의 핵심으로크로아티아 그바르디올 ‘괴물 수비’아르헨티나 알바레스, 메시 뒷받침아부..",
      url: "http://www.munhwa.com/news/view.html?no=2022121201072739083001",
      urlToImage:
        "http://image.munhwa.com/gen_news/202212/2022121201072739083001_b.jpg",
      publishedAt: "2022-12-12T02:43:14Z",
      content:
        ", \r\n, \r\n10 · \r\n2022 . -(14 4), -(15 4) 4 , 2000 .\r\n4 4 . (22· ). 11 8 17 . . 20202021 , . \r\n1 ( 1376 ) AS . 16, 8, 4 .\r\n(20·) . , . . , . , . 0. 21 . \r\n(22·) . . \r\n(35· ) () . 4 . \r\n4 (22·) . . 27 F … [+117 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "지하철 4호선 출근길 산본역서 선로전환기 장애…1시간30분 지연 시민 불편 - 서울신문",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiO2h0dHBzOi8vd3d3LnNlb3VsLmNvLmtyL25ld3MvbmV3c1ZpZXcucGhwP2lkPTIwMjIxMjEyNTAwMDg00gEsaHR0cHM6Ly9hbXAuc2VvdWwuY28ua3Ivc2VvdWwvMjAyMjEyMTI1MDAwODQ?oc=5",
      urlToImage: null,
      publishedAt: "2022-12-12T02:25:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Yonhapnewstv.co.kr" },
      author: null,
      title: "BTS 진, 내일 현역 입대…'까까머리' 사진 공개 - 연합뉴스TV",
      description:
        "BTS 진, 내일 현역 입대…'까까머리' 사진 공개\n\n방탄소년단의 맏형 진이 내일(13일) 현역 입대를 앞둔 가운데 삭발 사진을 공개했습니다.\n\n진은 팬 커뮤니티 위버스에 머리카락",
      url: "https://www.yonhapnewstv.co.kr/news/MYH20221212004700641",
      urlToImage:
        "https://yonhapnewstv-prod.s3.ap-northeast-2.amazonaws.com/article/MYH/20221212/MYH20221212004700641_P1.jpg",
      publishedAt: "2022-12-12T02:24:01Z",
      content:
        "<ul><li>()TV 2()\r\n</li><li> : </li><li> : 02-398-7800</li><li> : 101-86-62619</li></ul>\r\nCopyright 2019 © TV :: . 23 All rights reserved.\r\n () , ·· .",
    },
    {
      source: { id: null, name: "Hankyung.com" },
      author: null,
      title:
        "'위드 코로나' 전환 중국, 의료붕괴 방지·중증병상 확보 비상 - 한국경제",
      description:
        "'위드 코로나' 전환 중국, 의료붕괴 방지·중증병상 확보 비상, 국제",
      url: "https://www.hankyung.com/international/article/202212129660Y",
      urlToImage: "https://img.hankyung.com/photo/202212/ZK.32094258.1.jpg",
      publishedAt: "2022-12-12T02:19:24Z",
      content:
        '(SNS) 11() . 4 . 4 \' \' . (icks) .52 . " ", " ", " ", " ", " " . " " " " .  " " . dong2@hankyung.com',
    },
    {
      source: { id: null, name: "Yonhapnewstv.co.kr" },
      author: null,
      title: "이상민 해임안 '후폭풍'…국조특위 파행하나 - 연합뉴스TV",
      description:
        "이상민 해임안 '후폭풍'…국조특위 파행하나\n\n[앵커]\n\n이상민 행안부장관 해임건의안이 어제 민주당 주도로 통과됐는데요.\n\n국회에서 오늘 여야가 거세게 맞붙었습니다.\n\n여당 이태원",
      url: "https://www.yonhapnewstv.co.kr/news/MYH20221212004300641",
      urlToImage:
        "https://yonhapnewstv-prod.s3.ap-northeast-2.amazonaws.com/article/MYH/20221212/MYH20221212004300641_P1.jpg",
      publishedAt: "2022-12-12T02:19:20Z",
      content:
        "<ul><li>()TV 2()\r\n</li><li> : </li><li> : 02-398-7800</li><li> : 101-86-62619</li></ul>\r\nCopyright 2019 © TV :: . 23 All rights reserved.\r\n () , ·· .",
    },
    {
      source: { id: null, name: "Hani.co.kr" },
      author: null,
      title: "4년 전 결승 반복? 프랑스-크로아티아 재회할까 - 한겨레",
      description:
        "월드컵 결승 진출을 다툴 네 후보가 결정됐다. 아르헨티나, 크로아티아, 프랑스, 모로코가 주인공이다. 눈에 띄는 건 이들 네...",
      url: "https://www.hani.co.kr/arti/sports/soccer/worldcup/1071187.html",
      urlToImage:
        "https://flexible.img.hani.co.kr/flexible/normal/800/534/imgdb/original/2022/1212/20221212501104.jpg",
      publishedAt: "2022-12-12T02:11:20Z",
      content: null,
    },
    {
      source: { id: null, name: "Heraldcorp.com" },
      author: "한지숙",
      title:
        "[영상] 월드컵 때문에 아수라장 된 파리...모로코팬 난동에 경찰 최루탄 쏘며 연행 - 헤럴드경제",
      description:
        "카타르 월드컵에서 모로코와 프랑스가 각각 포르투갈, 잉글랜드를 물리치고 4강 진출을 확정하자 프랑스 수도 파리 샹젤리제 거리가 흥분한 팬들로 인해 아수라장으로 변했다. 11일(현지시간) AFP, 가디언 등에 따르면 모로코가 포르투갈을 이겨 사상 첫 월드컵 4강 신화를 쓰자 파리에 거주하는 모로코 팬들이 거리로 쏟아져 나왔다. 과거 프랑스 식민 지배를 당했던 모로코 이주민들은 이날 역사의 한 풀이를 하듯 폭죽을 터트리고 일부 팬은 난동을...",
      url: "http://biz.heraldcorp.com/view.php?ud=20221212000349",
      urlToImage:
        "//res.heraldm.com/content/image/2022/12/12/20221212000326_p.jpg",
      publishedAt: "2022-12-12T02:03:35Z",
      content:
        "(): 4 10 :: 03710:::02-727-0114 | : 1588-0533 Copyright Herald Corporation. All Rights Reserved.",
    },
    {
      source: { id: null, name: "Seoul.kr" },
      author: null,
      title:
        "12월 1∼10일 수출, 20.8％ 감소…무역 적자 49억달러 | 서울특별시 미디어재단 TBS - TBS뉴스",
      description: "12월 1∼10일 수출, 20.8％ 감소…무역 적자 49억달러}",
      url: "http://tbs.seoul.kr/news/newsView.do?typ_800=1&idx_800=3484964&seq_800=20477628",
      urlToImage:
        "http://tbs.seoul.kr/common/images/thumb/tv/thumb_TV_default.png",
      publishedAt: "2022-12-12T01:50:00Z",
      content:
        "10 1 20 9 .12 12 110 154 2,100 20.8 .\r\n27.6 , , , , 20 .\r\n, , .\r\n34.3 . \r\n, , , .\r\n10 203 4,400 1 7.3 .\r\n, , , , , .\r\n3 , , 62 1,200 23.2 .\r\n110 49 2,300 .\r\n4 8 .\r\n10 474 6,400 .",
    },
    {
      source: { id: null, name: "Imbc.com" },
      author: "정상빈",
      title:
        "차별금지법 반대 방송 '기독교 채널'‥법원 \"방통위 제재 위법\" - MBC뉴스",
      description:
        "차별금지법 도입에 반대하는 방송을 한 종교전문채널을 제재한 방송통신위원회 조치는 위법하다는 법원의 판단이 나왔습니다. 서울행정법원 행정13부는 차별금지법에 반대하는 내용의 방송을 ...",
      url: "https://imnews.imbc.com/news/2022/society/article/6435421_35673.html",
      urlToImage:
        "https://image.imnews.imbc.com/news/2022/society/article/__icsFiles/afieldfile/2022/12/12/ph221212-5.jpg",
      publishedAt: "2022-12-12T01:47:13Z",
      content: "",
    },
    {
      source: { id: null, name: "Imbc.com" },
      author: "뉴미디어뉴스국",
      title:
        "[엠빅뉴스] [잉글랜드:프랑스 8강] 워커와 음바페 달리기 대결과 PK 장인 케인의 결정적 실축...킬포 넘쳤던 8강전 - MBC뉴스",
      description:
        "2022 카타르월드컵 최고의 매치플레이로 꼽힌 잉글랜드와 프랑스의 경기가 프랑스의 승리로 끝났습니다. 잉글랜드는 후반 막바지 결정적인 PK찬스에서 헤리 케인의 실축으로 4강 진출에...",
      url: "https://imnews.imbc.com/original/mbig/6435409_29041.html",
      urlToImage:
        "https://image.imnews.imbc.com/original/mbig/__icsFiles/afieldfile/2022/12/12/221211_evsf_thumb_640.jpg",
      publishedAt: "2022-12-12T01:10:32Z",
      content: "",
    },
    {
      source: { id: null, name: "Nocutnews.co.kr" },
      author: "김민재",
      title:
        "미노련, 주52시간·호봉제 개편 권고…尹정부 '노동개혁' 본격화 - 노컷뉴스",
      description:
        "윤석열 정부의 노동시간·임금체계 개편을 위한 전문가 기구 '미래노동시장연구회'가 최종 권고안을 공개했다. 이미 정부가 노동정책 방향을 공개한 가운데 이를 뒷받침할 전문가 권고안이 나오면서 내년부터 정부가 ..",
      url: "https://www.nocutnews.co.kr/news/5862997",
      urlToImage:
        "https://file2.nocutnews.co.kr/newsroom/image/2022/12/12/202212120958473390_0.jpg",
      publishedAt: "2022-12-12T01:00:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Uslpga.kr" },
      author: null,
      title: "LPGA - LPGA",
      description:
        "LPGA 한국 공식사이트, 라이브스코어, LPGA 뉴스, 포토, 비디오, 선수정보, 대회정보 제공",
      url: "http://www.uslpga.kr/news/view/1/42742",
      urlToImage: "//image.jtbcgolf.joins.com/main/lpga.kr_og_800x400.png",
      publishedAt: "2022-12-12T00:55:00Z",
      content:
        "LPGA . [ ]\r\n(LPGA) . 2023 LPGA (21) .LPGA , . 12() 8 144 LPGA 29 100 1 . 1 73 61 LPGA . 8 144 LPGA 2018 6, 2021 .\r\n1 . 1 KLPGA , 2 2 . 2018 2019 (KLPGA) . 2020 KLPGA , 5 .\r\nLPGA . [ ]\r\n. JTBC 4 , 100… [+61 chars]",
    },
    {
      source: { id: null, name: "Donga.com" },
      author: null,
      title: "‘테라·루나 사태’ 권도형, 세르비아 체류…수사 공조 요청 - 동아일보",
      description:
        "한국산 가상화폐 테라·루나 폭락 사태의 핵심 인물인 권도형 테라폼랩스 대표가 세르비아에 체류 중인 것으로 파악됐다.  12일 법조계에 따르면 서울남부지검 금융증권범죄합수단(단장 …",
      url: "https://www.donga.com/news/Society/article/all/20221212/116955852/2",
      urlToImage:
        "https://dimg.donga.com/a/600/0/90/5/wps/NEWS/IMAGE/2022/12/12/116955801.2.jpg",
      publishedAt: "2022-12-12T00:53:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Wowtv.co.kr" },
      author: "한국경제티브이",
      title:
        "환혼 빛과 그림자 이재욱 고윤정과 직진 혼인으로 새로운 국면반전 매력 UP - 한국경제TV",
      description:
        "‘환혼: 빛과 그림자’ 이재욱이 색다른 매력을 선보이며 안방을 장악했다.     tvN 토일드라마 ‘환혼: 빛과 그림자’는 역사에도 지도에도 존재하지 않은 대호국을 배경으로 영혼을 바꾸는 ‘환혼술’로 인해 운명...",
      url: "https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202212120072",
      urlToImage:
        "https://img.wowtv.co.kr/wowtv_news/dnrs/20221212/2022121209371608904d3244b4fed182172185139.jpg",
      publishedAt: "2022-12-12T00:50:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Imbc.com" },
      author: "정혜인",
      title: '청소년 개량 백신 접종‥고위험군 "적극 권고" - MBC뉴스',
      description:
        "코로나19 개량 백신의 접종 대상이 오늘부터 만 12세 이상 청소년들까지 확대됩니다. 정혜인 기자가 보도합니다.  오늘부터 만 12세 이상 청소년들도 코로...",
      url: "https://imnews.imbc.com/replay/2022/nw930/article/6435395_35736.html",
      urlToImage:
        "https://image.imnews.imbc.com/replay/2022/nw930/article/__icsFiles/afieldfile/2022/12/12/0930_20221212_093409_1_3_Large.jpg",
      publishedAt: "2022-12-12T00:34:47Z",
      content:
        "19 12 . \r\n.\r\n12 19 . \r\n90 . \r\n1339 , . \r\n6 10 19 '18 ' '12 ' . \r\nBA.1 BA.4·BA.5 .\r\n, , 12 . \r\n[/19 ]\r\n\" 3 5 , 1.8 2 .\"\r\n19 18 14 , , . \r\n60 , 50% .\r\nMBC .\r\nMBC 24 . \r\n02-784-4000mbcjebo@mbc.co.kr@mbc",
    },
    {
      source: { id: null, name: "Hankookilbo.com" },
      author: "https://www.facebook.com/hkilbo",
      title:
        "최성국, 방송 스태프들과 신혼여행 함께한 사연 ('조선의 사랑꾼') - 한국일보",
      description:
        "배우 최성국은 방송 스태프들 앞에서 신혼여행이 주는 행복까지 자랑했다. TV조선 '조선의 사랑꾼' 측은 12일 \"최성국이 인생 한 번뿐일 신혼여행마저 '조선의 사랑꾼'과 함께했다\"고 밝혔다. 결혼에 대한 경험을 날것으로 보여주는 '조선의 사랑꾼'은 1대 사랑꾼으로 최성국과 오나미를 섭외해 지난 추석 연휴 파일럿으로 처음 방송됐다. 최성국은 '조선의 사랑꾼'",
      url: "https://www.hankookilbo.com/News/Read/A2022121209050000245",
      urlToImage:
        "https://newsimg.hankookilbo.com/cms/articlerelease/2022/12/12/0a54f67f-5091-43b0-a291-94b8b9a2f294.jpg?t=20221212102153",
      publishedAt: "2022-12-12T00:33:52Z",
      content:
        "1 () ( ) ( ) (hankookilbo.com) , . 2 ( ) 1. . (ID) . . , , . . (ID) . (ID) . , PDA, , IPTV . , , . 2. 1 , . 3 ( ) 1. . 2. ( ) . 3. 1 30 . , , . 4. . 5. 15 . 4 ( ) 1. , . 2. . 5 ( ) 1. ( ) . 2. . . . … [+722 chars]",
    },
    {
      source: { id: null, name: "Hani.co.kr" },
      author: null,
      title: "윤 대통령 지지율 38.4%…2주 상승 뒤 0.5%P 하락 - 한겨레",
      description: "리얼미터 조사…7일엔 40.4% 기록부정평가 58.8% 3주 연속 하락",
      url: "https://www.hani.co.kr/arti/politics/politics_general/1071170.html",
      urlToImage:
        "https://flexible.img.hani.co.kr/flexible/normal/640/384/imgdb/original/2022/1212/20221212500244.jpg",
      publishedAt: "2022-12-11T23:50:02Z",
      content: "38.4% 7 []\r\n :2022-12-12 08:50 :2022-12-12 11:27",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "[문화연예 플러스] 황재균지연 결혼‥콘서트 같은 열기 (2022.12.12/뉴스투데이/MBC) - MBCNEWS",
      description:
        "걸그룹 티아라 멤버 지연과 야구선수 황재균이 지난 주말 부부의 연을 맺었는데요. 신부를 위한 신랑의 춤에 동료 가수들의 축가까지 콘서트장을 방불케 했다고 하네요. https://imnews.imbc.com/replay/2022/nwtoday/article/6435361_35752....",
      url: "https://www.youtube.com/watch?v=1FTpNdkIiNU",
      urlToImage: "https://i.ytimg.com/vi/1FTpNdkIiNU/maxresdefault.jpg",
      publishedAt: "2022-12-11T23:03:55Z",
      content: null,
    },
  ],

  business: [
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "이마트, 경기방어주 이마트 트레이더스 '멤버십' - 토마토증권통 TomatoTV",
      description:
        "▶ 토마토증권통 TV링크토마토증권통 유튜브 : https://bit.ly/33x2xfX토마토증권통 유튜브 생방송 https://bit.ly/3A6hvam토마토증권통TV 홈페이지 : https://tv.etomato.com/▶ 패밀리 링크이토마토 홈페이지 : https://www.e...",
      url: "https://www.youtube.com/watch?v=wk4vx0uY5EE",
      urlToImage: "https://i.ytimg.com/vi/wk4vx0uY5EE/maxresdefault.jpg",
      publishedAt: "2022-12-12T04:26:08Z",
      content: null,
    },
    {
      source: { id: null, name: "Hani.co.kr" },
      author: null,
      title: "거리두기 해제됐지만…“자영업 매출 작년보다 줄어” - 한겨레",
      description:
        "음식·도소매업 68% “매출 줄어”53% “내년도 올해보다 감소” 전망",
      url: "https://www.hani.co.kr/arti/economy/economy_general/1071208.html",
      urlToImage:
        "https://flexible.img.hani.co.kr/flexible/normal/800/533/imgdb/original/2022/1212/20221212501513.jpg",
      publishedAt: "2022-12-12T04:15:09Z",
      content: ":2022-12-12 13:15 :2022-12-12 13:27",
    },
    {
      source: { id: null, name: "Seoul.co.kr" },
      author: "박승기",
      title:
        "11월 고용보험 가입자 약 32만명 증가…월별 증가폭 9개월째 감소 - 서울신문",
      description:
        "고용보험 가입자 1495만 2000명으로 전년동월대비 2.2% 늘어 제조업, 어려운 환경에도 2021년 1월 이후 23개월 연속 증가 코로나19 대응 일자리 축소로 공공행정 가입자는 큰 폭 감소, 지난달 고용보험 가입자가 1년 전보다 약 32만명 증가한 것으로 나타났다. 월별 가입자 증가폭은 지난 2월 최고치(56만 5000명)를 기록한 뒤 9개월째 감소세가 이어졌다.고용노동부가 12일 발표한 ‘2022년 11월 노동시장 동향’에 따르면 지난달 말 기준 고용보…",
      url: "https://www.seoul.co.kr/news/newsView.php?id=20221212500095",
      urlToImage:
        "https://img.seoul.co.kr/img/upload/2022/12/12/SSI_20221212124004.jpg",
      publishedAt: "2022-12-12T03:40:00Z",
      content:
        "1495 2000 2.2% , 2021 1 23 19 \r\n1 32 . 2 (56 5000) 9 . 11 1 32 . 2 (56 5000) 9 .\r\n12 2022 11 1495 2000 11 2.2%(31 9000) .(7 1000), (6 7000), (5 8000), (4 3000), (4 3000) .\r\n369 5000 2021 1 23 . 1033 … [+117 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "美 CPI·FOMC 촉각···증시에 미칠 파장은? (박상현 )/ 증시투데이 시장진단 / 한국경제TV - 한국경제TV",
      description:
        "박권 MC출연 : 박상현 하이투자증권 연구위원방송일 : 2022년 12월 12일△대한민국의 경제를 보세요!△빠르고 정확한 경제·증권 뉴스와 파트너스들의 분석진단을 24시간 전해드립니다. △구독좋아요 그리고 알람설정하세요!- #파월 #FOMC #CPI #증시 #증권 #투자 #주식 #...",
      url: "https://www.youtube.com/watch?v=JljNb7_pSxQ",
      urlToImage: "https://i.ytimg.com/vi/JljNb7_pSxQ/maxresdefault.jpg",
      publishedAt: "2022-12-12T03:36:02Z",
      content: null,
    },
    {
      source: { id: null, name: "Joseilbo.com" },
      author: null,
      title: "신혼부부 소득 7% 늘 때, 빚 15% 뛰었다…아이도 덜 낳아 - 조세일보",
      description:
        "◆…지난해 신혼부부가 8만쌍 넘게 줄었다. 집값 폭등으로 무주택 신혼부부가 많아졌고 빚도 더 늘었다.(사진 연합뉴스)\r\r\r최근 5년 내 결혼한 신혼부부",
      url: "http://www.joseilbo.com/news/htmls/2022/12/20221212473251.html",
      urlToImage:
        "http://www.joseilbo.com/gisa_img/16708142121670814212_yubyoup.jpg",
      publishedAt: "2022-12-12T03:10:09Z",
      content:
        ", '2021 ' \r\n12 '2021 ' 5(2016~2021) 1101000 82000(7.0%) . 1 10.4%(22000) .. (871000) 54.2% 1 1.3% . 0.66 0.02 . 2016 63.7% 2020 55.5% .\r\n. 6400, 1 6.9% . . 54.9% 1 2.9% .\r\n. . 89.1%. 1.6% . ( ) 15300… [+87 chars]",
    },
    {
      source: { id: null, name: "Korea.kr" },
      author: "신용희. 기업결합과장",
      title:
        "유리 산업 분야 기업결합 심사결과 - 부처 브리핑 | 브리핑룸 | 뉴스 - 대한민국정책포털 korea.kr",
      description:
        "시작하겠습니다. 공정거래위원회는 ㈜LX인터내셔널이 한국유리공업㈜ 주식 100%를 취득하는 기업결합에 대해 조건부로 승인하였습니다. 본 건 결합은 건축용 코팅유리 시장에서 2, 3위 사업자가 결합 후 50% 이상 점유율로 1위 사업자가 되는 건으로 관련 시장의 경쟁제한 우려를 해소하기 위해 3년간 코팅유리 인상률 제한을 부과하였습니다. 이번 조치를 통해 결합",
      url: "https://www.korea.kr/news/policyBriefingView.do?newsId=156541931",
      urlToImage: "https://www.korea.kr/images/event/korea_logo_303_2018.jpg",
      publishedAt: "2022-12-12T03:00:00Z",
      content:
        ". LX 100% . \r\n2, 3 50% 1 3 . \r\n, 1 KCC . \r\n. \r\nLX 2022 3 31 100% , 2022 4 4 . \r\n2, 3 1 , KCC -- . \r\n. \r\n, , 3 . \r\n, , , . \r\n, , . \r\n50% 1 . \r\n, , , . \r\n, , . \r\n, . \r\n, KCC , , . \r\n. \r\n3 . \r\n4 . \r\n, .… [+226 chars]",
    },
    {
      source: { id: null, name: "Economychosun.com" },
      author: null,
      title:
        "이재용, 삼성전자 회장 취임 후 첫 인사 단행 투톱 체제 유지 속 '기술 인재' 전면 배치…“안정 속 쇄신” - 이코노미조선",
      description:
        "이재용, 삼성전자 회장 취임 후 첫 인사 단행 투톱 체제 유지 속 ‘기술 인재’ 전면 배치…“안정 속 쇄신”",
      url: "http://economychosun.com/client/news/view.php?boardName=C05&t_num=13613890",
      urlToImage:
        "http://economychosun.com/query/upload/472/1670782798_list.jpg",
      publishedAt: "2022-12-12T02:12:23Z",
      content:
        ". 2 . 10 27 . 30·40 .\r\n12 5 7, 2 9 2023 . (DX) (DS) . .\r\n 7 6 50. (54) DX . . (58) DX . (56) DS &amp; , (55) DS (CTO) , (59) DX , (58) CR(Corporate Relations) , (60) .\r\n , (DRAM), 1 . SBS , . . · .\r\n… [+364 chars]",
    },
    {
      source: { id: null, name: "Investing.com" },
      author: "Hankyung",
      title:
        "한화투자증권, 소비자중심경영 인증 재취득 By Hankyung - Investing.com",
      description: "한화투자증권, 소비자중심경영 인증 재취득",
      url: "https://kr.investing.com/news/economy/article-862259",
      urlToImage: "https://i-invdn-com.investing.com/news/LYNXNPEB6J0AJ_L.jpg",
      publishedAt: "2022-12-12T02:10:00Z",
      content: "%USER_NAME%() ?\r\n , %USER_NAME%() Investing.com .",
    },
    {
      source: { id: null, name: "Ccnnews.co.kr" },
      author: "최형순 기자",
      title:
        "한국타이어, ESG 경영의 명예의 전당 'DJSI 월드' 7년 연속 이어가 - 충청뉴스",
      description:
        "[충청뉴스 최형순 기자] 한국타이어앤테크놀로지㈜가 글로벌 최상위 지속가능경영 평가 지수 ‘2022 다우존스 지속가능경영지수 월드(Dow Jones Sustainability Indicies World, 이하 DJSI 월드)’에 7년 연속 편입하며 ESG 경영 리딩기업으로 위상을 더욱 공고히 했다.‘DJSI 월드’는 전 세계 시가총액 상위 2,500대 기업 중 환경·사회·지배구조(ESG) 경영 수준 상위 10%에게만 주어지는 지표다. 올해는 평가 대상인 글로벌 …",
      url: "http://www.ccnnews.co.kr/news/articleView.html?idxno=278867",
      urlToImage:
        "http://www.ccnnews.co.kr/news/thumbnail/202212/278867_347943_553_v150.jpg",
      publishedAt: "2022-12-12T02:06:03Z",
      content:
        "ESG (DJSI) 7 2,555 12.8% 326 , 24, , ESG \r\n[ ] ‘2022 (Dow Jones Sustainability Indicies World, DJSI )’ 7 ESG .\r\n‘DJSI ’ 2,500 ··(ESG) 10% . 2,555 12.8% 326 . 24 , 2 .‘DJSI ’ 7 ESG . DJSI , , , , R&am… [+393 chars]",
    },
    {
      source: { id: null, name: "Industrynews.co.kr" },
      author: "권선형 기자",
      title:
        "정부, 2030년까지 교류(AC)‧직류(DC) 혼용배전망 구축 - 인더스트리뉴스",
      description:
        "[인더스트리뉴스 권선형 기자] 정부가 2030년까지 1,905억원을 들여 교류(AC), 직류(DC) 혼용배전망을 구축한다.산업부는 12월 12일 ‘차세대 AC/DC Hybrid 배전 네트워크 기술개발 사업’ 제1차 운영위원회를 개최하고, 이러한 내용의 미래형 배전망 기술개발 사업에 본격 착수했다.이번 사업은 기존 교류(AC) 중심의 우리나라 배전 전력망에 중간전압의 직류(MVDC) 선로를 병행해 연계하는 교류와 직류 혼용 배전망을 구축하기 위한 기술개발 사업이…",
      url: "http://www.industrynews.co.kr/news/articleView.html?idxno=48130",
      urlToImage:
        "http://www.industrynews.co.kr/news/thumbnail/202212/48130_50967_1128_v150.jpg",
      publishedAt: "2022-12-12T02:00:00Z",
      content:
        "[ ] 2030 1,905 (AC), (DC) .\r\n 12 12 ‘ AC/DC Hybrid ’ 1 , .\r\n (AC) (MVDC) . MVDC(Medium Voltage Direct Current) HVDC(100kV ) LVDC(1.5kV) .\r\n · , 7 1,905 , 2030 AC, DC . HW (2022~2026, 656) LS , AC DC … [+128 chars]",
    },
    {
      source: { id: null, name: "Chosun.com" },
      author: "조선비즈",
      title: "NH농협카드, 전국 주요 스키장 최대 60% 할인 - 조선비즈 - 조선비즈",
      description: "NH농협카드, 전국 주요 스키장 최대 60% 할인",
      url: "https://biz.chosun.com/stock/finance/2022/12/12/WOFR46ECAJCKZGG2TF3BSNQACE/",
      urlToImage:
        "https://biz.chosun.com/resizer/nSR4hzdKXlDAJGt61bkcnFhgVZ4=/1200x630/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/SDMCSTV5HRGRXAZDNTZEMDRUPU.jpg",
      publishedAt: "2022-12-12T01:54:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Seoul.kr" },
      author: null,
      title:
        "12월 1∼10일 수출, 20.8％ 감소…무역 적자 49억달러 | 서울특별시 미디어재단 TBS - TBS뉴스",
      description: "12월 1∼10일 수출, 20.8％ 감소…무역 적자 49억달러}",
      url: "http://tbs.seoul.kr/news/newsView.do?typ_800=1&idx_800=3484964&seq_800=20477628",
      urlToImage:
        "http://tbs.seoul.kr/common/images/thumb/tv/thumb_TV_default.png",
      publishedAt: "2022-12-12T01:50:00Z",
      content:
        "10 1 20 9 .12 12 110 154 2,100 20.8 .\r\n27.6 , , , , 20 .\r\n, , .\r\n34.3 . \r\n, , , .\r\n10 203 4,400 1 7.3 .\r\n, , , , , .\r\n3 , , 62 1,200 23.2 .\r\n110 49 2,300 .\r\n4 8 .\r\n10 474 6,400 .",
    },
    {
      source: { id: null, name: "Joseilbo.com" },
      author: null,
      title:
        "삼성생명, 2023년 정기 임원인사…부사장 2명 등 총 11명 승진 - 조세일보",
      description:
        "◆…삼성생명은 12일 ‘2023년 정기 임원인사’를 실시하고 부사장 2명, 상무 9명 등 총 11명을 승진시켰다. 사진=삼성생명 제공",
      url: "https://www.joseilbo.com/news/htmls/2022/12/20221212473227.html",
      urlToImage:
        "http://www.joseilbo.com/gisa_img/16708091851670809185_myfinkl.jpg",
      publishedAt: "2022-12-12T01:41:27Z",
      content:
        "<ul><li> : 2022.12.12 10:41 </li><li> : 2022.12.12 10:41 </li></ul>\r\n12 ‘2023 ’ 2, 9 11 ., / , , .\r\n2023 .\r\n[ ]\r\n (2), (9), , , , , , , ,",
    },
    {
      source: { id: null, name: "H2news.kr" },
      author: null,
      title: "한국가스공사, 제18대 최연혜 사장 취임 - 월간수소경제",
      description:
        "[월간수소경제 성재경 기자] 한국가스공사는 최연혜 전 국회의원이 지난 12월 9일 한국가스공사 제18대 사장으로 취임했다고 밝혔다.  최연혜 사장은 평택·인천·통영·삼척 등 전국 LNG 생산기지 및 9개 지역본부의 안전 상황을 점검하고 조직, 인사, 사업 분야의 3개 태스크포스(TF)를 신설하는 것으로 업무를 시작했다.  가스공사는 최근 글로벌 에너지 대",
      url: "http://www.h2news.kr/news/article.html?no=10564",
      urlToImage:
        "https://www.h2news.kr/data/photos/20221250/art_16708086520595_f3c3b4.jpg",
      publishedAt: "2022-12-12T01:33:09Z",
      content:
        "[ ] . . 18 100 . Air Liquide, Aramco, bp, Essent(E.ON ), ExxonMobil, Gasunie, GES, Hes international, Koole Terminals, Linde, OCI, RWE, Shell, Sasol, Uniper, Vopak, VTTI . 100 (Fluor) . . CO2",
    },
    {
      source: { id: null, name: "Investing.com" },
      author: "인포스탁데일리",
      title:
        "엔씨소프트, 'TL' 경쟁작 '디아블로4'의 위협 부터 인포스탁데일리 - Investing.com",
      description: "엔씨소프트, 'TL' 경쟁작 '디아블로4'의 위협",
      url: "https://kr.investing.com/news/stock-market-news/article-862231",
      urlToImage: "https://i-invdn-com.investing.com/news/LYNXMPEB14010_L.jpg",
      publishedAt: "2022-12-12T01:11:00Z",
      content: "%USER_NAME%() ?\r\n , %USER_NAME%() Investing.com .",
    },
    {
      source: { id: null, name: "Seoulwire.com" },
      author: "최석범 기자",
      title:
        "동경주·남해축산·합천농협, 사라신협 고객들에 적금 해지 눈물의 요청 - 서울와이어",
      description:
        "[서울와이어 최석범 기자] 일부 지역농협이 고객에게 가입한 적금상품을 해지해달라고 요청하는 황당한 일이 발생했다. 직원의 실수로 연 10%대 고금리 적금 상품이 비대면으로 판매됐는데, 감당하기 어려운 수준의 자금이 몰려 경영상 어려움이 예상된다는 이유에서다.12일 금융권에 따르면 지역농협 3곳과 신협 1곳은 최근 연 8~10%대 고금리 적금상품을 판매했다가 감당하기 어려운 수준의 자금이 몰리자, 가입고객들에게 가입해지를 요청하는 문자를 전송했다.지역농협 3곳은…",
      url: "http://www.seoulwire.com/news/articleView.html?idxno=488953",
      urlToImage:
        "https://cdn.seoulwire.com/news/thumbnail/202212/488953_694201_4634_v150.jpg",
      publishedAt: "2022-12-12T00:50:33Z",
      content:
        "[ ]  . 10% , .\r\n12 3 1 8~10% , .\r\n 3 ··, ( ) 1.\r\n \" 10% . . \" .\r\n'' . 4 5000 , 1 .\r\n '' . . , 10% .\r\n . , , , .\r\n \" , , \" .\r\n© \r\n0",
    },
    {
      source: { id: null, name: "Munhwa.com" },
      author: null,
      title:
        "KF-21 승패 가를 핵심무장 '한국형 타우러스' 국내기술로 개발한다 - 문화일보",
      description:
        "장거리공대지유도탄 2028년까지 개발…국내 첫 공중발사 유도탄 외국은 10년 정도 걸려… 개발지체 시 KF-2..",
      url: "http://www.munhwa.com/news/view.html?no=2022121201039930114001",
      urlToImage:
        "http://image.munhwa.com/gen_news/202212/2022121201039930114001_b.jpg",
      publishedAt: "2022-12-12T00:43:14Z",
      content:
        '2028 10 KF-21 4.5 KF-21 () .\r\n( ) 2028 1900 KF-21 12 .\r\nkm KF-21 , . 350 . · GmbH , F-15K 500 . . \r\n"· " " 2019 2021 " .\r\n(ADD) . · LIG, , , (KAI) K- .\r\n, KF-21 . 10 2030 . KF-21 KF-21 . \r\n"3 " .',
    },
    {
      source: { id: null, name: "Imbc.com" },
      author: "남효정",
      title:
        "외국인 지난달 국내주식 3조원 순매수…채권 순투자 7천억 원 넘어 - MBC뉴스",
      description:
        "지난달 외국인이 국내 상장주식을 3조 원 가까이 순매수하고 상장채권은 7천억 원 넘게 순투자했습니다. 금융감독원이 오늘 공개한 '2022년 11월 외국인 증권투자 동향'을 보면 외...",
      url: "https://imnews.imbc.com/news/2022/econo/article/6435402_35687.html",
      urlToImage:
        "https://image.imnews.imbc.com/news/2022/econo/article/__icsFiles/afieldfile/2022/12/12/jsh_221212_05.jpg",
      publishedAt: "2022-12-12T00:41:39Z",
      content:
        "[: TV]\r\n3 7 .\r\n'2022 11 ' 2 9280 .\r\n10 3 5790 , 11 2 7610 , 1670 .\r\n4 2310 , 3 4990 7320 .",
    },
    {
      source: { id: null, name: "Yna.co.kr" },
      author: "신선미",
      title: '"20·30대 67%는 대체육에 긍정적…시장 더 커질 듯" - 연합뉴스',
      description:
        "(서울=연합뉴스) 신선미 기자 = 20·30대 10명 중 거의 7명은 대체육(대안육)에 긍정적인 인식을 지녔다는 조사결과가 나왔다.",
      url: "https://www.yna.co.kr/view/AKR20221212028800003",
      urlToImage:
        "https://img3.yna.co.kr/etc/inner/KR/2022/12/12/AKR20221212028800003_03_i_P4.jpg",
      publishedAt: "2022-12-12T00:40:47Z",
      content:
        "\"20·30 67% \" . [TV ]\r\n(=) = 20·30 10 7 () .\r\n .\r\n 20·30 1 67.6% '' 12 .\r\n''(71.4%· ) .\r\n ' '(53.0%), ' '(43.5%), ' '(36.5%) .\r\n 2008 15 2019 150, 250 . 18 .\r\n 2018 13 2020 199, 286 .\r\n , .\r\n , , 2030… [+70 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "거리두기 해제에 올해 전력 거래량 역대 최대 전망 / 연합뉴스TV (YonhapnewsTV) - 연합뉴스TV",
      description:
        "거리두기 해제에 올해 전력 거래량 역대 최대 전망사회적 거리두기 해제 영향으로 올해 전력거래량이 역대 최대를 기록할 것으로 전망됩니다. 전력거래소 전력통계시스템에 따르면 올해 들어 11월까지 누적 전력거래량은 49만8,757GWh(기가와트시)로, 작년 같은 기간보다 2.5%늘어 역...",
      url: "https://www.youtube.com/watch?v=KER8Qf10eUA",
      urlToImage: "https://i.ytimg.com/vi/KER8Qf10eUA/maxresdefault.jpg",
      publishedAt: "2022-12-12T00:34:36Z",
      content: null,
    },
  ],

  entertainment: [
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "보나(우주소녀), “청순은 이런 느낌” l BONA(WJSN), “Innocent looks like this” [공항] - 디스패치 / Dispatch",
      description:
        "[Dispatch=인천공항ㅣ김수인기자] 그룹 ‘우주소녀’가 ‘2022 아시아 아티스트 어워즈' 일정차 12일 오전 인천국제공항을 통해 일본 나고야로 출국했다.#우주소녀 #WJSN #보나 #수빈 #루다 #다영 #여름 #BONA #SOOBIN #LUDA #DAYOUNG #YEOREUM...",
      url: "https://www.youtube.com/watch?v=FeryywL9JvY",
      urlToImage: "https://i.ytimg.com/vi/FeryywL9JvY/maxresdefault.jpg",
      publishedAt: "2022-12-12T03:07:32Z",
      content: null,
    },
    {
      source: { id: null, name: "Yonhapnewstv.co.kr" },
      author: null,
      title: "BTS 진, 내일 현역 입대…'까까머리' 사진 공개 - 연합뉴스TV",
      description:
        "BTS 진, 내일 현역 입대…'까까머리' 사진 공개\n\n방탄소년단의 맏형 진이 내일(13일) 현역 입대를 앞둔 가운데 삭발 사진을 공개했습니다.\n\n진은 팬 커뮤니티 위버스에 머리카락",
      url: "https://www.yonhapnewstv.co.kr/news/MYH20221212004700641",
      urlToImage:
        "https://yonhapnewstv-prod.s3.ap-northeast-2.amazonaws.com/article/MYH/20221212/MYH20221212004700641_P1.jpg",
      publishedAt: "2022-12-12T02:24:01Z",
      content:
        "<ul><li>()TV 2()\r\n</li><li> : </li><li> : 02-398-7800</li><li> : 101-86-62619</li></ul>\r\nCopyright 2019 © TV :: . 23 All rights reserved.\r\n () , ·· .",
    },
    {
      source: { id: null, name: "Chosun.com" },
      author: "health chosun",
      title:
        "'재벌집 막내아들' 이성민, 섬망 연기 시청률 폭발… 섬망 어떤 질환일까? - 헬스조선",
      description: "지난 11일 방송된 JTBC 금토일드라마",
      url: "https://m.health.chosun.com/svc/news_view.html?contid=2022121200939",
      urlToImage:
        "https://health.chosun.com/site/data/img_dir/2022/12/12/2022121200938_0.jpg",
      publishedAt: "2022-12-12T02:23:00Z",
      content:
        "11 JTBC ' ' 11 ( ) . 21.137% ( )​. 11 , . ?, , . (, , ) . 10~15% . . , .\r\n. . , .\r\n. · , · . · . , . '( )', , , .\r\n(CT), (MRI) , . . . . , . .",
    },
    {
      source: { id: null, name: "Khan.co.kr" },
      author: "이예주 온라인기자",
      title: "김나영, 유튜브 수익 1억 기부 “한부모 여성 가장에게” - 스포츠경향",
      description:
        "방송인 김나영이 선한 영향력을 펼쳤다. 11일 김나영은 자신의 유튜브 채널 ‘김나영의 노필터 TV’에 ‘크...",
      url: "https://sports.khan.co.kr/news/sk_index.html?art_id=202212121033013&sec_id=540101",
      urlToImage:
        "https://images.khan.co.kr/article/2022/12/12/news-p.v1.20221212.13e34245cbd4411892a610fee4927b71_P1.jpg",
      publishedAt: "2022-12-12T01:33:00Z",
      content:
        ", , \r\nHELP\r\n· ( : )· \r\n3 : 02041: 2012.03.22 : : Tel. 02-3701-1114 \r\nCopyrightThe Kyunghyang Shinmun, All rights reserved.\r\nRSS",
    },
    {
      source: { id: null, name: "Mt.co.kr" },
      author: "전형주",
      title: '이상민 "69억 빚에 출가 고민"…스님들 "자격 없다" 왜? - 머니투데이',
      description:
        "방송인 이상민이 과거 사업에 실패해 출가를 고민한 적이 있다고 고백했다. 다만 스님들은 &quot;빚이 있으면 출가를 할 수 없다&quot;고 선을 그었다.이상민은 12...",
      url: "https://news.mt.co.kr/mtview.php?no=2022121210015921596",
      urlToImage: "https://thumb.mt.co.kr/21/2022/12/2022121210015921596_1.jpg",
      publishedAt: "2022-12-12T01:13:24Z",
      content:
        '. " " .12 SBS \'\' , , , , .\r\n" . , \'\'. " .\r\n. " " , " . . " ." " . " " .\r\n2049( 20 49 ) 4.2%, 12.1%, 15% . 2049 1 .',
    },
    {
      source: { id: null, name: "Chosun.com" },
      author: "조선일보",
      title:
        "‘미스터트롯2′ 마스터 장민호, “정말 너무 놀랐다”...’미리보기’ 어땠기에 - 조선일보 - 조선일보",
      description:
        "미스터트롯2′ 마스터 장민호, 정말 너무 놀랐다...미리보기 어땠기에 미스터트롯2 새로운 전설의 시작 미리보기  17일 밤 10시 50분 방송 김성주 김연자 장윤정 진성 장민호 붐 출연",
      url: "https://www.chosun.com/culture-life/broadcast-media/2022/12/12/ODWLHWNTYBDWVA4KP2MHE5PDIM/",
      urlToImage:
        "https://images.chosun.com/resizer/8FSav4mSPUowSX3QeMydZ0Yxdyw=/900x472/filters:focal(432x304:442x314)/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/RLNZU6HH7RGILBSLGGEPYQBS6M.jpg",
      publishedAt: "2022-12-12T01:12:00Z",
      content: null,
    },
    {
      source: { id: null, name: "News1.kr" },
      author: "(서울=뉴스1) 김학진 기자",
      title:
        "\"급 낮은 트젠, 미친X 나가 죽어\"…풍자, 악성 문자 공개 '충격' - 뉴스1",
      description:
        "트랜스젠더 방송인 풍자가 자신이 받은 충격적인 악성 문자와 함께 본인의 사칭범을 잡았다고 털어놨다.지난 11일 MBC '혓바닥 종합격투기 세치혀'가 처음 방송됐다. 먼저 혀를 날름거리며 등장한 MC 전현무는 \"'세치혀'는 썰스포츠라는 새로운 장르로 목소리, 단어, 표정 등 다양한 말 ...",
      url: "https://www.news1.kr/articles/?4891611",
      urlToImage:
        "https://image.news1.kr/system/photos/2022/12/12/5732935/article.jpg",
      publishedAt: "2022-12-12T00:56:33Z",
      content:
        ".11 MBC ' ' . \r\nMC \"'' , , \" \", , \" .\r\n. \" . . . ' X ' . ' ' ' . . ?' \" .\r\n\" DM( ) \" .\r\n\"' ' ' ' ' ' . \" .\r\n1 . \" . . . . . ' ?' \" .\r\n\" . \" \" . . . . . \" .\r\n\" . . . ' ' . 11 \" .\r\n\" . \" .\r\nBJ . ' 2' .… [+15 chars]",
    },
    {
      source: { id: null, name: "Wowtv.co.kr" },
      author: "한국경제티브이",
      title:
        "환혼 빛과 그림자 이재욱 고윤정과 직진 혼인으로 새로운 국면반전 매력 UP - 한국경제TV",
      description:
        "‘환혼: 빛과 그림자’ 이재욱이 색다른 매력을 선보이며 안방을 장악했다.     tvN 토일드라마 ‘환혼: 빛과 그림자’는 역사에도 지도에도 존재하지 않은 대호국을 배경으로 영혼을 바꾸는 ‘환혼술’로 인해 운명...",
      url: "https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202212120072",
      urlToImage:
        "https://img.wowtv.co.kr/wowtv_news/dnrs/20221212/2022121209371608904d3244b4fed182172185139.jpg",
      publishedAt: "2022-12-12T00:50:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Hankookilbo.com" },
      author: "https://www.facebook.com/hkilbo",
      title:
        "최성국, 방송 스태프들과 신혼여행 함께한 사연 ('조선의 사랑꾼') - 한국일보",
      description:
        "배우 최성국은 방송 스태프들 앞에서 신혼여행이 주는 행복까지 자랑했다. TV조선 '조선의 사랑꾼' 측은 12일 \"최성국이 인생 한 번뿐일 신혼여행마저 '조선의 사랑꾼'과 함께했다\"고 밝혔다. 결혼에 대한 경험을 날것으로 보여주는 '조선의 사랑꾼'은 1대 사랑꾼으로 최성국과 오나미를 섭외해 지난 추석 연휴 파일럿으로 처음 방송됐다. 최성국은 '조선의 사랑꾼'",
      url: "https://www.hankookilbo.com/News/Read/A2022121209050000245",
      urlToImage:
        "https://newsimg.hankookilbo.com/cms/articlerelease/2022/12/12/0a54f67f-5091-43b0-a291-94b8b9a2f294.jpg?t=20221212102153",
      publishedAt: "2022-12-12T00:33:52Z",
      content:
        "1 () ( ) ( ) (hankookilbo.com) , . 2 ( ) 1. . (ID) . . , , . . (ID) . (ID) . , PDA, , IPTV . , , . 2. 1 , . 3 ( ) 1. . 2. ( ) . 3. 1 30 . , , . 4. . 5. 15 . 4 ( ) 1. , . 2. . 5 ( ) 1. ( ) . 2. . . . … [+722 chars]",
    },
    {
      source: { id: null, name: "Hankyung.com" },
      author: null,
      title:
        "고척돔 찍은 임영웅, LA로 향한다…내년 2월 美 콘서트 시작 - 한국경제",
      description:
        "고척돔 찍은 임영웅, LA로 향한다…내년 2월 美 콘서트 시작, 김수영 기자, HEI",
      url: "https://www.hankyung.com/entertainment/article/202212129135H",
      urlToImage: "https://img.hankyung.com/photo/202212/01.32093113.1.jpg",
      publishedAt: "2022-12-12T00:28:51Z",
      content:
        "2022 ' '. 5 2022 TOP 10, 2022 TOP 10, 2022 TOP 10, 2022 TOP 10, 2022 TOP 10 .2022 TOP 10 2 1 . 1 ' ' . 2 1 OST ' ', '' 5, 10 . . () '(TOMBOY)' ' (Pink Venom)'  4, 6 . ' (After LIKE)' ' (LOVE DIVE)' 7… [+327 chars]",
    },
    {
      source: { id: null, name: "Mydaily.co.kr" },
      author: "Codrops",
      title:
        "'츄 퇴출' 이달의 소녀, 컴백 강행…내년 1월 3일 앨범 발매 - 마이데일리",
      description:
        "[마이데일리 = 오윤주 기자] 그룹 이달의 소녀(LOONA)가 2023년 1월 3일 완전체 컴백한다.\r\n\r\n12일 0시 소속사 블록베리크리에이티브는",
      url: "https://www.mydaily.co.kr/new_yk/html/read.php?newsid=202212120911701261",
      urlToImage:
        "https://cdn.mydaily.co.kr/FILES/202212/202212120911701261_1.jpg",
      publishedAt: "2022-12-12T00:18:33Z",
      content:
        "[ = ] (LOONA) 2023 1 3 .12 0 (, , , , , , , , , , ) . \r\n. ' Whats Next [ ]?' . '[ ]' , . \r\n, . \r\n6 ' (Flip That)' 7 . \r\n11 . .\r\n[ = ]\r\n(www.mydaily.co.kr)&amp;",
    },
    {
      source: { id: null, name: "Munhwa.com" },
      author: null,
      title: "선우은숙, 4세 연하 유영재와 결혼 두 달 만에 지쳐…왜? - 문화일보",
      description:
        "배우 선우은숙(63)이 4세 연하인 아나운서 유영재(59)와 재혼 후 달라진 점을 이야기했다.10일 방송된 MBN ..",
      url: "http://www.munhwa.com/news/view.html?no=20221212MW081454692066",
      urlToImage:
        "http://image.munhwa.com/gen_news/202212/20221212MW081454692066_b.jpg",
      publishedAt: "2022-12-11T23:22:53Z",
      content:
        "(63) 4 (59) .10 MBN .\r\n. . . .\r\n. , .\r\n, 1978 KBS . 1981 , 26 2007 . 10 .\r\n[]\r\n&lt; '' . -.&gt;",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "[문화연예 플러스] 뉴진스 '쿠키', 뉴욕타임스 \"올해 최고의 노래\" (2022.12.12/뉴스투데이/MBC) - MBCNEWS",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DYtci1xwtVTo",
      urlToImage: null,
      publishedAt: "2022-12-11T23:05:45Z",
      content: null,
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "[문화연예 플러스] 황재균지연 결혼‥콘서트 같은 열기 (2022.12.12/뉴스투데이/MBC) - MBCNEWS",
      description:
        "걸그룹 티아라 멤버 지연과 야구선수 황재균이 지난 주말 부부의 연을 맺었는데요. 신부를 위한 신랑의 춤에 동료 가수들의 축가까지 콘서트장을 방불케 했다고 하네요. https://imnews.imbc.com/replay/2022/nwtoday/article/6435361_35752....",
      url: "https://www.youtube.com/watch?v=1FTpNdkIiNU",
      urlToImage: "https://i.ytimg.com/vi/1FTpNdkIiNU/maxresdefault.jpg",
      publishedAt: "2022-12-11T23:03:55Z",
      content: null,
    },
    {
      source: { id: null, name: "Chosun.com" },
      author: "조선일보",
      title:
        "‘태계일주’ 기안84, 페루 숙소서 혼술 중 욕설…왜? - 조선일보 - 조선일보",
      description: "태계일주 기안84, 페루 숙소서 혼술 중 욕설왜",
      url: "https://www.chosun.com/entertainments/broadcast/2022/12/12/DSMU5FJ6HNEJ7IW3L7XBD5XWTM/",
      urlToImage:
        "https://images.chosun.com/resizer/YJl48chZg6mWJNCsWsj4CS3Q0Do=/560x294/filters:focal(329x484:339x494)/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/VURNUATLSOKHF56XTPP3OXG3TY.jpg",
      publishedAt: "2022-12-11T22:39:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Chosun.com" },
      author: "조선일보",
      title:
        "조현영, \"노홍철과 사귀냐고\"...당사자가 더 놀란 '열애설 소문' ('그냥 조현영') - 조선일보 - 조선일보",
      description:
        "조현영, 노홍철과 사귀냐고...당사자가 더 놀란 열애설 소문 그냥 조현영",
      url: "https://www.chosun.com/entertainments/enter_general/2022/12/12/BBAKTAJS27D42C2M5KHDFA7OQM/",
      urlToImage:
        "https://images.chosun.com/resizer/x3QEFf1k0nO47cXbQyK8orATZkQ=/640x336/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/ZQ2BXATWCALQXWAW4SQCIF2WSI.jpg",
      publishedAt: "2022-12-11T22:32:12Z",
      content: null,
    },
    {
      source: { id: null, name: "Sportschosun.com" },
      author: null,
      title:
        "20대 女, 번호 따이는 일 다반사…\"온갖 이상한 사람들이 꼬여\"('물어보살') - 스포츠조선",
      description:
        "20대 女, 번호 따이는 일 다반사…\"온갖 이상한 사람들이 꼬여\"('물어보살') 스포츠조선닷컴 김준석 기자 의뢰인에게 이상한 사람들이 꼬인다.오늘12일 밤 8시 30분 방송되는 KBS Joy 예능프로그램 '무엇이든 물어보살' 195회에는 20대 초반 여성이 의뢰인으로 출연한다.이날 의뢰인은 온갖 사람들이 자신에게 말을 너무 많이 건다고 운을 뗀다. 길거리를 지나다니다가 번호를 물어보는 사람은 물론, 집까지 쫓아오는 경우도 많다는 것이다.고등학생 시절 친구와 함…",
      url: "https://m.sportschosun.com/news.htm?id=202212130100077920009306&servicedate=20221212",
      urlToImage:
        "https://sccdn.chosun.com/news/html/2022/12/12/2022121301000779200093061.jpg",
      publishedAt: "2022-12-11T22:05:59Z",
      content:
        '[ ] .(12) 8 30 KBS Joy \' \' 195 20 .\r\n. , .\r\n , ., .\r\n. " " . "OO . " .\r\nnarusi@sportschosun.com',
    },
    {
      source: { id: null, name: "Mydaily.co.kr" },
      author: "Codrops",
      title:
        "홍현희제이쓴, 주사맞고 우는 子 부모긴 해…마음 찢어지게 아파 (홍쓴TV) - 마이데일리",
      description:
        "[마이데일리 = 박서연 기자] 개그우먼 홍현희(40), 인테리어 디자이너 제이쓴(본명 연제승·36) 부부가 아들 준범이가 예방주사를 맞고 우는 모습",
      url: "https://www.mydaily.co.kr/new_yk/html/read.php?newsid=202212111558153176",
      urlToImage:
        "https://cdn.mydaily.co.kr/FILES/202212/202212111558153176_1.jpg",
      publishedAt: "2022-12-11T21:36:02Z",
      content:
        ', " " (TV)\r\n[ = ] (40), ( ·36) . 10 \' TV\' \' \' . \r\n2 . . . \r\n" " . " ?" . " . " . \r\n , " , . " . " " . " " . \r\n, 2018 8 ( ) .\r\n[ = ]\r\n(www.mydaily.co.kr)&amp; \r\nHOT',
    },
    {
      source: { id: null, name: "Mydaily.co.kr" },
      author: "Codrops",
      title:
        "김우리, 연 매출 100억 가족기업 CEO 딸? 월급 축내는 '월충' ('당나귀 귀')[종합] - 마이데일리",
      description:
        "[마이데일리 = 강다윤 기자] 스타일리스트 김우리가 연 매출 100억 CEO의 일상을 공개했다.\r\n\r\n11일 방송된 KBS 2TV 사장님 귀는 당",
      url: "https://www.mydaily.co.kr/new_yk/html/read.php?newsid=202212111654781363",
      urlToImage:
        "https://cdn.mydaily.co.kr/FILES/202212/202212111654781363_1.jpg",
      publishedAt: "2022-12-11T20:00:01Z",
      content:
        '[ = ] 100 CEO .11 KBS 2TV \' \' 27 . \r\n27 7 . 20 100 CEO." . . " " " .\r\n. " , . " .\r\n1 . " . 5 " . " . , , , . " .\r\n. . 6 , 2 .\r\n. CS . . 5400 .1~2. . " 7, 8 100 " .\r\n" . " " . . " .\r\n" " . . , , . , ,… [+118 chars]',
    },
    {
      source: { id: null, name: "Mydaily.co.kr" },
      author: "Codrops",
      title:
        "김범수, 1년 제주살기→연애했나? 노래빼고 다 했다 ('미우새')[종합] - 마이데일리",
      description:
        "[마이데일리 = 강다윤 기자] 가수 김범수가 제주도에서 보낸 1년 휴식기에 대해 전했다.\r\n\r\n11일 방송된 SBS 미운 우리 새끼에서는 김범수가",
      url: "https://www.mydaily.co.kr/new_yk/html/read.php?newsid=202212112050744407",
      urlToImage:
        "https://cdn.mydaily.co.kr/FILES/202212/202212112050744407_1.jpg",
      publishedAt: "2022-12-11T19:00:01Z",
      content: "HOT",
    },
  ],

  health: [
    {
      source: { id: null, name: "Koreadaily.com" },
      author: null,
      title: "독감·RSV 진단수요 급증 - 미주중앙일보",
      description:
        "무보험자는 자가진단 비용 169불<br/>”손쉬운 독감.RSV 자가진단키트 필요”",
      url: "https://news.koreadaily.com/2022/12/11/society/generalsociety/20221211154820746.html",
      urlToImage:
        "https://news.koreadaily.com/resources/images/logo/sns-logo.png",
      publishedAt: "2022-12-10T18:48:19Z",
      content: "To write comments, please log in to one of the accounts.",
    },
  ],

  science: [
    {
      source: { id: null, name: "Hankyung.com" },
      author: null,
      title: "서울대 경영대 403점, 연고대는 395점 - 한국경제",
      description:
        "서울대 경영대 403점, 연고대는 395점, 2023 대입정시 접수 상위권 합격선 10점 이상 낮아져 인서울, 수학 과목서 당락 좌우 '이과 N수생' 문과 침공이 변수",
      url: "https://www.hankyung.com/society/article/2022121184241",
      urlToImage: "https://img.hankyung.com/photo/202212/AA.32076786.1.jpg",
      publishedAt: "2022-12-11T09:01:25Z",
      content:
        "2023 () 9 . · 2 , 10 . ‘ ’ .\r\n2023 9 3 . 1 \r\n11 , , , , 414~417, 396~403 . 2022 10~13 .417, 416, 414, 415 . 415, ·· 412, 410 .\r\n403, · 395, 386, 385, · 381, LD 378, 377, () 376 .\r\n2023 . (396), (394)… [+147 chars]",
    },
    {
      source: { id: null, name: "Hani.co.kr" },
      author: null,
      title:
        "수학 1등급 93%가 '미적분·기하' 선택…“통합수능 '이과 쏠림' 심화” - 한겨레",
      description: "수학 1등급 93%가 ‘미적분·기하’ 선택",
      url: "https://www.hani.co.kr/arti/society/schooling/1071099.html",
      urlToImage:
        "https://flexible.img.hani.co.kr/flexible/normal/748/499/imgdb/original/2022/1211/20221211501268.jpg",
      publishedAt: "2022-12-11T06:30:15Z",
      content: ":2022-12-11 15:30 :2022-12-11 17:45",
    },
    {
      source: { id: null, name: "Chosun.com" },
      author: "조선일보",
      title:
        "14~21일 첫 민간 우주발사체 엔진 검증 시험발사...한국판 ‘스페이스X’ 시험무대 - 조선일보 - 조선일보",
      description:
        "14~21일 첫 민간 우주발사체 엔진 검증 시험발사...한국판 스페이스X 시험무대 이노스페이스 브리질서 하이브리드 엔진 시험발사체 발사  조선비즈",
      url: "https://www.chosun.com/economy/science/2022/12/11/IC4GDPO3SRDRPFHCER7KGU5VE4/",
      urlToImage:
        "https://images.chosun.com/resizer/NxcXjzApiELSXj9rE6XtoIje4B4=/1200x630/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/CYHKFY6S5JC35AFIO7OZODYZJE.jpg",
      publishedAt: "2022-12-11T04:49:00Z",
      content: null,
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "[핫클립] UAM 서비스 기반 조성을 위한 한국의 진행 상황 / YTN 사이언스 - YTN 사이언스",
      description:
        "한국 정부에서는 정부 주도 협의체인 UAM 팀 코리아를 결성했다.여러 기관, 기업들이 참여해서 UAM 서비스를실현시키기 위해 필요한 요소들을 고민하고 있다.======================================== ※ Full 영상 ▶ https://youtu.be/...",
      url: "https://www.youtube.com/watch?v=8ZCkZcY4zN8",
      urlToImage: "https://i.ytimg.com/vi/8ZCkZcY4zN8/maxresdefault.jpg",
      publishedAt: "2022-12-11T03:30:02Z",
      content: null,
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "[핫클립] 선풍기를 제작하게 된 이유 / YTN 사이언스 - YTN 사이언스",
      description:
        "난방, 주방, 생활, 펫, 환경 등 대한민국 가전의대부분을 생산하는 오늘의 최강기업은선풍기 KS 표시 허가를 획득하여 국내 선풍기 보급의 선두주자이다.선풍기 쪽으로 사업을 시작하게 된오늘의 최강기업 정윤석 대표를 만나본다.=================================...",
      url: "https://www.youtube.com/watch?v=9tZO45u_ql0",
      urlToImage: "https://i.ytimg.com/vi/9tZO45u_ql0/maxresdefault.jpg",
      publishedAt: "2022-12-11T01:30:04Z",
      content: null,
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "[NEWS] 지각판 없는 화성.. 지진과 화산 분화가 일어날 수 있었던 원인 - YTN 사이언스",
      description:
        "지각판 없는 화성에서 지진과 화산 분화가 일어난 이유는 맨틀 융기 때문인 것으로 확인됐습니다.미국 애리조나대학 달·행성 연구소의 아드리엔 브로케 박사팀은 화성 북부 저지대 중 적도에 근접한 '엘리시움 평원'에서 맨틀 융기 흔적을 찾아냈다고 밝혔습니다.맨틀 융기는 행성 깊은 내부에서...",
      url: "https://www.youtube.com/watch?v=d7Jx7Or7UMI",
      urlToImage: "https://i.ytimg.com/vi/d7Jx7Or7UMI/maxresdefault.jpg",
      publishedAt: "2022-12-10T10:57:11Z",
      content: null,
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "[NEWS] 차세대 디스플레이 기술 .. 국내 연구진, 늘어나는 반도체 개발 - YTN 사이언스",
      description:
        "[앵커]국내 연구진이 고무줄처럼 길게 늘일 수 있는 반도체를 개발했습니다.좁은 공간에 많은 소자를 집적할 수 있는 특수 기술이 적용됐는데, 고해상도 신축성 디스플레이 제작에 활용될 수 있을 전망입니다.최소라 기자입니다.[기자]디스플레이의 핵심 소재인 반도체는 딱딱한 웨이퍼 위에 제...",
      url: "https://www.youtube.com/watch?v=nGMfSm-nwu0",
      urlToImage: "https://i.ytimg.com/vi/nGMfSm-nwu0/maxresdefault.jpg",
      publishedAt: "2022-12-10T10:44:59Z",
      content: null,
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "[핫클립] 게임 학원을 다니는 이유? / YTN 사이언스 - YTN 사이언스",
      description:
        "게임 전문 교육기관에서는 게임을 배우기 위해 찾아온 사람들로 가득하다.이들은 일상을 살아가는데 큰 활력을 주는 좋은 취미인게임을 건전하게 배우고 바르게 즐기고자 하는 수강생들이다.이들이 시간을 들여 학원에서 게임을 배우는 이유는 무엇일까?========================...",
      url: "https://www.youtube.com/watch?v=BOQuQ9toa5o",
      urlToImage: "https://i.ytimg.com/vi/BOQuQ9toa5o/maxresdefault.jpg",
      publishedAt: "2022-12-10T04:30:01Z",
      content: null,
    },
    {
      source: { id: null, name: "Scimonitors.com" },
      author: null,
      title:
        "제임스 웹 망원경이 목격한 선명한 별의 죽음 – 사이언스모니터 | The Science Monitor - 사이언스모니터",
      description: null,
      url: "http://scimonitors.com/제임스-웹-우주-망원경이-관찰한-선명한-별의-죽음/",
      urlToImage: null,
      publishedAt: "2022-12-09T14:43:27Z",
      content: null,
    },
    {
      source: { id: null, name: "Hani.co.kr" },
      author: null,
      title:
        "변기 뚜껑 안 닫으면 '세균 비말' 천장까지…녹색 레이저 실험 - 한겨레",
      description: "콜로라도대학 연구진, 병원균 옮기는 변기 비말 첫 시각화",
      url: "https://www.hani.co.kr/arti/society/society_general/1070994.html",
      urlToImage:
        "https://flexible.img.hani.co.kr/flexible/normal/584/525/imgdb/child/2022/1209/16705779744849_1516705778010784.jpg",
      publishedAt: "2022-12-09T09:43:35Z",
      content: ":2022-12-09 18:43 :2022-12-10 11:35",
    },
    {
      source: { id: null, name: "Donga.com" },
      author: null,
      title:
        "수능 만점 권하은 양 “수학문제 풀다 아찔한 순간도…코로나 탓 학원 못다녀” - 동아일보",
      description:
        "“아무리 어려운 문제가 나와도 포기하지 않으려고 했어요.”2023학년도 대학수학능력시험(수능) 전 과목 만점자인 울산 현대청운고 3학년 권하은 양(18)은 만점 비결을 이렇게 말…",
      url: "https://www.donga.com/news/Society/article/all/20221209/116926197/1",
      urlToImage:
        "https://dimg.donga.com/a/500/0/90/5/wps/NEWS/IMAGE/2022/12/09/116926195.1.jpg",
      publishedAt: "2022-12-09T04:54:00Z",
      content: null,
    },
  ],

  sports: [
    {
      source: { id: null, name: "Chosun.com" },
      author: "조선일보",
      title:
        "‘마스크 투혼’ 손흥민, 13일 소속팀 토트넘 복귀 - 조선일보 - 조선일보",
      description: "마스크 투혼 손흥민, 13일 소속팀 토트넘 복귀",
      url: "https://www.chosun.com/sports/special-qatar2022/2022/12/12/CK2HRB5V6NFSTFKOERKR224OAQ/",
      urlToImage:
        "https://images.chosun.com/resizer/WTbl3EqnU73SNbfvUFl-YwCUMCM=/410x215/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/ASS3ANJUKFDNTCPALHLFSL6JH4.jpg",
      publishedAt: "2022-12-12T02:44:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Munhwa.com" },
      author: null,
      title: "그라운드 장악한 '영건 4인방'… 4강은 그대들의 무대 - 문화일보",
      description:
        "프랑스 추아메니, 공격의 핵심으로크로아티아 그바르디올 ‘괴물 수비’아르헨티나 알바레스, 메시 뒷받침아부..",
      url: "http://www.munhwa.com/news/view.html?no=2022121201072739083001",
      urlToImage:
        "http://image.munhwa.com/gen_news/202212/2022121201072739083001_b.jpg",
      publishedAt: "2022-12-12T02:43:14Z",
      content:
        ", \r\n, \r\n10 · \r\n2022 . -(14 4), -(15 4) 4 , 2000 .\r\n4 4 . (22· ). 11 8 17 . . 20202021 , . \r\n1 ( 1376 ) AS . 16, 8, 4 .\r\n(20·) . , . . , . , . 0. 21 . \r\n(22·) . . \r\n(35· ) () . 4 . \r\n4 (22·) . . 27 F … [+117 chars]",
    },
    {
      source: { id: null, name: "Hani.co.kr" },
      author: null,
      title: "4년 전 결승 반복? 프랑스-크로아티아 재회할까 - 한겨레",
      description:
        "월드컵 결승 진출을 다툴 네 후보가 결정됐다. 아르헨티나, 크로아티아, 프랑스, 모로코가 주인공이다. 눈에 띄는 건 이들 네...",
      url: "https://www.hani.co.kr/arti/sports/soccer/worldcup/1071187.html",
      urlToImage:
        "https://flexible.img.hani.co.kr/flexible/normal/800/534/imgdb/original/2022/1212/20221212501104.jpg",
      publishedAt: "2022-12-12T02:11:20Z",
      content: null,
    },
    {
      source: { id: null, name: "Chosun.com" },
      author: "조선일보",
      title:
        "이재성 “벤투 감독은 한 수 앞 바라보는 분… 진짜 명장이다” - 조선일보 - 조선일보",
      description: "이재성 벤투 감독은 한 수 앞 바라보는 분 진짜 명장이다",
      url: "https://www.chosun.com/sports/special-qatar2022/2022/12/12/RMJ6PMVNMVCV3NVJH6QIO4ECSU/",
      urlToImage:
        "https://images.chosun.com/resizer/Q5Jhxa3ZEqduFWKK7tRnP7gp8GQ=/721x378/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/OAZVORMJKRF4DEHU5CTP6GWYIA.JPG",
      publishedAt: "2022-12-12T01:28:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Imbc.com" },
      author: "뉴미디어뉴스국",
      title:
        "[엠빅뉴스] [잉글랜드:프랑스 8강] 워커와 음바페 달리기 대결과 PK 장인 케인의 결정적 실축...킬포 넘쳤던 8강전 - MBC뉴스",
      description:
        "2022 카타르월드컵 최고의 매치플레이로 꼽힌 잉글랜드와 프랑스의 경기가 프랑스의 승리로 끝났습니다. 잉글랜드는 후반 막바지 결정적인 PK찬스에서 헤리 케인의 실축으로 4강 진출에...",
      url: "https://imnews.imbc.com/original/mbig/6435409_29041.html",
      urlToImage:
        "https://image.imnews.imbc.com/original/mbig/__icsFiles/afieldfile/2022/12/12/221211_evsf_thumb_640.jpg",
      publishedAt: "2022-12-12T01:10:32Z",
      content: "",
    },
    {
      source: { id: null, name: "Uslpga.kr" },
      author: null,
      title: "LPGA - LPGA",
      description:
        "LPGA 한국 공식사이트, 라이브스코어, LPGA 뉴스, 포토, 비디오, 선수정보, 대회정보 제공",
      url: "http://www.uslpga.kr/news/view/1/42742",
      urlToImage: "//image.jtbcgolf.joins.com/main/lpga.kr_og_800x400.png",
      publishedAt: "2022-12-12T00:55:00Z",
      content:
        "LPGA . [ ]\r\n(LPGA) . 2023 LPGA (21) .LPGA , . 12() 8 144 LPGA 29 100 1 . 1 73 61 LPGA . 8 144 LPGA 2018 6, 2021 .\r\n1 . 1 KLPGA , 2 2 . 2018 2019 (KLPGA) . 2020 KLPGA , 5 .\r\nLPGA . [ ]\r\n. JTBC 4 , 100… [+61 chars]",
    },
    {
      source: { id: null, name: "News1.kr" },
      author: "(서울=뉴스1) 김송이 기자",
      title:
        '"큰아들은 한국산"…크로아 오르시치, K리거 출신 첫 결승 갈까 - 뉴스1',
      description:
        "이번 월드컵에서 전·현직을 통틀어 유일하게 살아남은 K리거에 대한 관심이 뜨겁다. 10일&#40;이하 한국시간&#41; 크로아티아는 카타르 알라이얀의 에듀케이션 시티 스타디움에서 열린 브라질과의 8강전에서 연장전까지 1-1로 비긴 뒤 펼쳐진 승부차기에서 4-2로 승리했다.K리그 역수출...",
      url: "https://www.news1.kr/articles/?4891528",
      urlToImage:
        "https://image.news1.kr/system/photos/2022/12/12/5732799/article.jpg",
      publishedAt: "2022-12-12T00:21:14Z",
      content:
        '· K . 10( ) 8 1-1 4-2 .\r\nK (30· ) . \r\n, 8 . 9 3 . \r\n12 , .\r\n2 1 , 4 2 .\r\n2015~2018 K \'\' . K 2018 . . \r\n2020-21 16 8 .\r\n" " K .. 24 SNS "Made in Korea" .  \r\n14 4 . .\r\nsyk13@news1.kr',
    },
    {
      source: { id: null, name: "Mk.co.kr" },
      author: null,
      title: "기자 또 사망했다...카타르 월드컵에서 무슨 일이 - 매일경제",
      description:
        "2022 카타르 월드컵을 취재하던 미국 기자가 경기장 기자석에서 갑자기 숨진 가운데 이번에는 카타르 사진 기자가 취재 도중 사망했다는 소식이 전해졌다. 12일 영국 일간 데일리익스프레스에 따르면 카타르 뉴스 알카스TV(AI Kass TV)의 사진 기자 칼리드 알 미슬람이 지난 10일 취재 도중 돌연 사망했다. 현재까지 알 미슬람 기자의 사망 원인은 알려지지",
      url: "https://www.mk.co.kr/news/world/10564353",
      urlToImage:
        "https://wimg.mk.co.kr/news/cms/202212/12/news-p.v1.20221212.d2ba336f3233489198b46bcc254cd645.jpg",
      publishedAt: "2022-12-11T23:44:32Z",
      content: "()\r\n 190\r\n : 2009.11.30 / : 2009.11.30\r\n / :",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "[월드컵모아보기] 4강 대진표 확정…아르헨티나 vs 크로아티아, 프랑스 vs 모로코/모로코, 아프리카 최초 4강 진출/2022년 12월 12일(월)/KBS - KBS News",
      description:
        "카타르 월드컵 4강 대진이 확정됐습니다. 우리 시각으로 14일 새벽 4시 아르헨티나와 크로아티아가 준결승 1차전을 치르고, 15일 새벽 4시 프랑스와 모로코가 맞붙습니다. 모로코는 아프리카 국가 중 처음으로 월드컵 4강에 올랐는데요. 결승행 티켓은 누가 얻을지, 8강 하이라이트 영...",
      url: "https://www.youtube.com/watch?v=kVBIhKfAMTc",
      urlToImage: "https://i.ytimg.com/vi/kVBIhKfAMTc/maxresdefault_live.jpg",
      publishedAt: "2022-12-11T23:43:58Z",
      content: null,
    },
    {
      source: { id: null, name: "Munhwa.com" },
      author: null,
      title: "'전설' 파키아오, 링 복귀전에서 전원일치 판정승 - 문화일보",
      description:
        "무술가 유대경 상대로 스파링하듯 가볍게 승리필리핀 출신의 전설적인 복싱 선수 ‘팩맨’ 매니 파키아오(44)가..",
      url: "http://www.munhwa.com/news/view.html?no=20221212MW063238974066",
      urlToImage:
        "http://image.munhwa.com/gen_news/202212/20221212MW063238974066_b.jpg",
      publishedAt: "2022-12-11T21:34:31Z",
      content:
        "<table><tr><td><table><tr><td>(44) .\r\n11 .\r\n2, 6 .\r\n16 8 9 () .\r\n5 .\r\n.\r\n1 2 3 .\r\n.\r\n.\r\nKO 4 .\r\n( ) . \r\n5 2 .\r\n6 .\r\n, .\r\n.\r\n. .\r\n.\r\n12 .\r\n4500 2015 .\r\n( ) .\r\n&lt;&gt;&lt;(c)&gt;\r\n</td></tr></table></… [+169 chars]",
    },
    {
      source: { id: null, name: "Yonhapnewstv.co.kr" },
      author: null,
      title: "유럽·남미 잔치 4강에 모로코도…눈물 흘린 호날두·케인 - 연합뉴스TV",
      description:
        "유럽&middot;남미 잔치 4강에 모로코도&hellip;눈물 흘린 호날두&middot;케인<br>\r\n<br>\r\n[앵커]<br>\r\n<br>\r\n카타르 월드컵 4강 대진이 확정됐습니다",
      url: "https://m.yonhapnewstv.co.kr/news/MYH20221212000600641",
      urlToImage:
        "https://yonhapnewstv-prod.s3.ap-northeast-2.amazonaws.com/article/MYH/20221211/MYH20221212000600641_P1.jpg",
      publishedAt: "2022-12-11T20:51:51Z",
      content:
        "· 4 … ·[]\r\n4 .\r\n' ' , ' ' 4 .\r\n.\r\n.\r\n[]\r\n4 .\r\n, 2 .\r\n0-1 9 .\r\n1 , .\r\n1-2 36 .\r\n.\r\n.\r\n4 .\r\n' ' .\r\n0-1 6 .\r\nA 1 .\r\n' ' .\r\n4 .\r\n4 2002 20 .\r\n, .\r\nTV . joone@yna.co.kr\r\n# # #\r\nTV : / jebo23\r\n()",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "'평균 득점 2.1점' 우동현의 깜짝 활약...가스공사, 홈 5연승 질주 / YTN - YTN",
      description:
        "[앵커]남자 프로농구 한국가스공사가 선두 인삼공사를 꺾고 홈 5연승을 달렸습니다.수비 전문 후보 선수 우동현이 4쿼터 깜짝 활약으로 친정팀을 울렸습니다.프로농구 소식, 허재원 기자가 보도합니다.[기자]대구 가스공사 가드 우동현이 외국인 선수를 앞에 두고 과감한 드라이브인 득점을 올...",
      url: "https://www.youtube.com/watch?v=OHpHBVO5MjI",
      urlToImage: "https://i.ytimg.com/vi/OHpHBVO5MjI/maxresdefault.jpg",
      publishedAt: "2022-12-11T14:36:56Z",
      content: null,
    },
    {
      source: { id: null, name: "Mk.co.kr" },
      author: null,
      title:
        "“오늘이 가장 싸다”…맨유, 김민재 놓치고 후회? 48억서 608억 상승 - 매일경제",
      description:
        "김민재의 빅클럽 이적설이 점차 커지고 있는 가운데 잉글랜드 프리미어리그 명문 맨체스터 유나이티드(이하 맨유)가 과거에도 김민재 영입에 관심이 있었던 것으로 드러났다. 영국 매체 미러는 11일(한국시간) “맨유가 18개월 전 김민재 영입을 노린 적이 있다”고 보도했다. 미러에 따르면 김민재는 베이징 궈안 시절 맨유와 토트넘 홋스퍼 등으로부터 관심을 받았다.",
      url: "https://www.mk.co.kr/news/world/10564271",
      urlToImage:
        "https://wimg.mk.co.kr/news/cms/202212/11/news-p.v1.20221211.40ee3293c94e44c58e7329d585afb582.jpg",
      publishedAt: "2022-12-11T13:48:51Z",
      content:
        "( ) .\r\n 11() 18 .\r\n . 300 ( 48) . .\r\n 1 , 1600 ( 256) . 1 400% .\r\n . . , .\r\n A 14 2 . , A 9 . A 1 UEFA 1 .\r\n 6 3 A .\r\n 3800 ( 608 ) .\r\n 7 1 15 .\r\n .",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "[스포츠 영상] 레오, 역대 2번째 1세트 트리플 크라운 (2022.12.11/뉴스데스크/MBC) - MBCNEWS",
      description:
        "프로배구 OK금융그룹 외국인 선수 레오가 역대 2번째로 1세트에 서브와 블로킹, 백어택 득점을 각각 3개 이상씩 기록하는 트리플 크라운을 달성했습니다. https://imnews.imbc.com/replay/2022/nwdesk/article/6435284_35744.html#OK...",
      url: "https://www.youtube.com/watch?v=D5sW0VzYd-s",
      urlToImage: "https://i.ytimg.com/vi/D5sW0VzYd-s/maxresdefault.jpg",
      publishedAt: "2022-12-11T12:14:28Z",
      content: null,
    },
    {
      source: { id: null, name: "Chosun.com" },
      author: "조선일보",
      title:
        "‘무소속’ 호날두, 몸값 6분의1로 낮췄지만…구단들은 외면 - 조선일보 - 조선일보",
      description: "무소속 호날두, 몸값 6분의1로 낮췄지만구단들은 외면",
      url: "https://www.chosun.com/international/international_general/2022/12/11/J5GQTVJGVFGMTO2ONBJLG4XJ2I/",
      urlToImage:
        "https://images.chosun.com/resizer/xxqtzL9YUCc7KFOxyLGAMfkIYW4=/1200x630/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/R2ZGXMRU6VNQ7KQGORYBP4AX5M.jpg",
      publishedAt: "2022-12-11T11:16:00Z",
      content: null,
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "[카타르] 모로코 '아프리카 첫 4강'…황희찬 '뜨거운 출국' [MBN 뉴스센터] - MBN News",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1FgfT2MnBTg",
      urlToImage: null,
      publishedAt: "2022-12-11T11:11:07Z",
      content:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "[KBL] 원주 DB vs 서울 SK H/L (12.11) - SPOTV",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2xUuHXQTV8Q",
      urlToImage: null,
      publishedAt: "2022-12-11T10:15:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Edaily.co.kr" },
      author: "https://www.facebook.com/edailynews",
      title:
        "'조규성 중학교 선배'라는 김연경…\"축구대표팀 모습에 감동\" - 이데일리",
      description:
        "배구여제 김연경(34·흥국생명)과 ‘2022 카타르 월드컵’에서 멀티골로 화제가 된 조규성(24·전북 현대)이 10년 터울의 중학교 선후배 관계로 밝혀졌다.월드컵 경기를 챙겨봤다고 밝힌 김연경은 조규성에게 응원의 메시지를 남겼다.김연경은 2001년부터 2003년까지 ...",
      url: "https://www.edaily.co.kr/news/read?newsId=01282486632557536&amp;mediaCodeNo=258",
      urlToImage:
        "https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2022/12/PS22121100120.jpg",
      publishedAt: "2022-12-11T08:36:13Z",
      content:
        "04517 92 18F, 19F \r\n 02-3772-0114 I webmaster@edaily.co.krI 107-81-75795\r\n 00090 I 2005.10.25 II",
    },
    {
      source: { id: null, name: "Chosun.com" },
      author: "조선일보",
      title:
        "8강 탈락에도…포르투갈 감독 “호날두 벤치 결정엔 후회없다” - 조선일보 - 조선일보",
      description: "8강 탈락에도포르투갈 감독 호날두 벤치 결정엔 후회없다",
      url: "https://www.chosun.com/sports/special-qatar2022/2022/12/11/4IA4KRB7H5BDTKVSGIW4QJIIX4/",
      urlToImage:
        "https://images.chosun.com/resizer/VeUuxyYyY9gFIji_uaNtfR7AEfs=/1200x630/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/FBBI6ORY3NNXLN2IDRV2QYW2MI.jpg",
      publishedAt: "2022-12-11T07:07:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Hani.co.kr" },
      author: null,
      title:
        "옐로카드 18장 쏟아진 아르헨-네덜란드전…피파, 징계 절차 착수 - 한겨레",
      description:
        "국제축구연맹(FIFA)이 아르헨티나와 네덜란드의 2022 카타르월드컵 8강전 경기 당사자들에 대한 징계 절차에 착수했다. 해당 ...",
      url: "https://www.hani.co.kr/arti/sports/soccer/worldcup/1071097.html",
      urlToImage:
        "https://flexible.img.hani.co.kr/flexible/normal/900/600/imgdb/original/2022/1211/20221211501172.jpg",
      publishedAt: "2022-12-11T06:05:54Z",
      content: null,
    },
  ],

  technology: [
    {
      source: { id: null, name: "Tokenpost.kr" },
      author: null,
      title:
        "[오후 시세브리핑] 비트코인, 美 물가발표·금리결정 앞두고 하락...1만6900 달러 - 토큰포스트",
      description:
        "비트코인 가격이 미국의 물가 발표와 금리 결정을 앞두고 1만6900달러선에 머물고 있다.토큰포스트 마켓에 따르면 12일 오전 11시 기준 비트코인은 전날 대비 1.02% 하락한 1만6977달러(한화 약 2214만원)에 거래되고...",
      url: "https://www.tokenpost.kr/article-115683",
      urlToImage:
        "https://www.tokenpost.kr/assets/uploads/20221212b20b89c8479309a0f.png",
      publishedAt: "2022-12-12T02:30:00Z",
      content:
        '16900 .\r\n 12 11 1.02% 16977( 2214) .\r\n 2 1.00% 1256.69( 163) .\r\n . XRP(XRP) 1.45% (DOGE) 3.91% (ADA) 1.96% (MATIC) 1.63% .\r\n, 0.39% 25.95 .\r\n 8467 ( 1104) .\r\n= / \r\n (BTC) .\r\n12() " 12 (CPI), 14 (FOMC… [+103 chars]',
    },
    {
      source: { id: null, name: "Coindeskkorea.com" },
      author: "오수환 인턴기자",
      title:
        "[오전브리핑] BAYC 홀더 고소, 미국 통화감독청, 미 물가·FOMC 대기 - Coindesk Korea",
      description:
        "금융연 “은행예금 토큰화로 스테이블 코인 발행을”이명활 한국금융연구원 선임연구위원은 11일 낸 ‘디지털화폐와 은행의 역할’ 보고서에서 은행 예금을 토큰으로 만들어 스테이블 코인을 발행하는 방안을 검토할 필요가 있다고 밝혔다. 보고서는 미래의 디지털화폐는 법정화폐인 중앙은행 디지털화폐(CBDC)와 준 화폐인 (달러 등에 가치가 연동되는) 법정화폐 담보형 스테이블 코인 중심으로 재편·발전될 것으로 전망했다. CBDC는 중앙은행이 제조·발행하고 은행이 유통·환수시키…",
      url: "https://www.coindeskkorea.com/news/articleView.html?idxno=82515",
      urlToImage:
        "http://www.coindeskkorea.com/news/photo/202212/82515_26649_5453.jpg",
      publishedAt: "2022-12-12T02:30:00Z",
      content:
        '“    ”\r\n 11 ‘ ’ . (CBDC) ( ) · . CBDC · · 2 . .\r\n" "…BAYC , · \r\n10() US (BAYC) NFT 2 .    BAYC  ,  .  " " " " .\r\n", "\r\n9() OCC “() ” “ ” . OCC “ ” “ ” . OCC “FTX ” “ ” .\r\n ? CPI,  \r\n 10 CPI 7.7% , . … [+74 chars]',
    },
    {
      source: { id: null, name: "Tokenpost.kr" },
      author: null,
      title:
        "[토큰포스트 오후 브리핑] 금융당국, 가상자산 거래소 코인 상장 '승인제' 검토 外 - 토큰포스트",
      description:
        "[금융당국, 가상자산 거래소 코인 상장 승인제 검토]금융당국이 국내 가상자산 거래소의 코인 상장을 당국이 직접 승인하는 내용을 가상자산기본법안에 포함시키는 안을 검토중인 것으로 나타났다. 최근 국내 대표 김치코인으로 꼽히던...",
      url: "https://www.tokenpost.kr/article-115682",
      urlToImage:
        "https://www.tokenpost.kr/assets/uploads/202212125c974be0a3a26fa6c.gif",
      publishedAt: "2022-12-12T02:30:00Z",
      content:
        "[, ‘’ ]\r\n ‘’ . ‘ ’ . . “ ‘ ’ ” .\r\n[ “ ” ]\r\n 14 ‘ , ?’ 12 . '· ', FTX , . . . . 14 10, 4 .\r\n[' 4~9% ' 8550 ]\r\n 8550 . 12 , 4( ) 22 · A(44) 3 . 10 2 4~9% 8728 8550 . 141 359 .\r\n[ \"SBF, \"]\r\n CEO \" . . .… [+1528 chars]",
    },
    {
      source: { id: null, name: "Tokenpost.kr" },
      author: null,
      title:
        '러시아 중앙은행 "암호화폐 합법화 법안 지지...국내 유통엔 신중해야" - 토큰포스트',
      description:
        "러시아 중앙은행(CBR)이 암호화폐 채굴 합법화 법안에 지지를 표명했지만 자국 내 법적 제도하에서만 판매되기를 원한다고 밝혔다.10일(현지시간) 러시아 중앙은행(CBR)이 암호화폐 채굴 합법화 법안을 원칙적으로 지지한다는 입장을...",
      url: "https://www.tokenpost.kr/article-115681",
      urlToImage:
        "https://www.tokenpost.kr/assets/uploads/20221212f21bb399074983339.jpg",
      publishedAt: "2022-12-12T01:48:00Z",
      content:
        '" ... " (CBR) .\r\n10() (CBR) .\r\nCBR " " .\r\n 11 () .\r\n 23() (Vedomosti) , \' \' .\r\n .\r\n (Sergey Altuhov) “ ” “ ” .\r\n[email protected]',
    },
    {
      source: { id: null, name: "Irobotnews.com" },
      author: "이성원",
      title:
        "크라켄 로보틱스, 캐나다해군과 653억원에 원격 기뢰처리 로봇 계약 - 로봇신문사",
      description:
        "캐나다 로봇회사 크라켄 로보틱스(Kraken Robotics)가 왕립캐나다해군(CRN)에 원격 기뢰처리시스템(RMDS)을 공급한다고 네이벌테크놀로지가 지난 8일(현지시각) 보도했다.이 계약은 내년 1월부터 인수 계획이 개시되며 약 24개월의 인수 프로그램으로 이뤄진다....",
      url: "http://m.irobotnews.com/news/articleView.html?idxno=30284",
      urlToImage:
        "http://www.irobotnews.com/news/photo/202212/30284_65548_3628.jpg",
      publishedAt: "2022-12-12T01:28:20Z",
      content:
        "(Kraken Robotics) (CRN)  (RMDS)    8() .\r\n   1     24   .  5    ,        ‘  (ILS)’  .\r\n      ILS       5000 ( 653 )    .     4000 , ILS   1000  .\r\n          (RCN)         .\r\nRMDS       (MDS),   (TCC)… [+354 chars]",
    },
    {
      source: { id: null, name: "Tokenpost.kr" },
      author: null,
      title:
        '3AC 공동 창업자 "샘 뱅크먼, 수년간 더블록 장악...기사 편집 방향까지 지시" - 토큰포스트',
      description:
        "유동성 문제로 파산을 신청한 에프티엑스(FTX) 암호화폐 거래소가 블록체인 전문매체인 더블록(The Block)을 비밀리에 지원했다는 소식에 업계 내 관계자들의 눈길이 쏠리고 있다.10일(현지시간) 파산한 암호화폐 헤지펀드...",
      url: "https://www.tokenpost.kr/article-115675",
      urlToImage:
        "https://www.tokenpost.kr/assets/uploads/20221212c3d1b06c4264a4d1e.png",
      publishedAt: "2022-12-12T01:08:00Z",
      content:
        '3AC " , ... " (FTX) (The Block) .\r\n10() (3AC) (Su Zhu) " (CEO) (SBF) " .\r\n = (Su Zhu) 3AC \r\n (Axios) , (Mike McCaffrey) CEO FTX (Alameda Research) 4300 3 .\r\n 2021 2 SBF 1200 , 4 .\r\n 1 1500 ( 195) , 1… [+128 chars]',
    },
    {
      source: { id: null, name: "Tokenpost.kr" },
      author: null,
      title: '美 상원의원 "암호화폐, 존재 이유 없다" - 토큰포스트',
      description:
        "미국 상원의원이 암호화폐 존재에 대한 주장을 펼쳐 관련 업계가 이를 주목하고 있다.11일(현지시간) 존 테스터 미국 몬태나주 상원의원은 내가 규제에 직접 참여하는 사람은 아니지만, 암호화폐가 존재해야 할 이유가 없다고...",
      url: "https://www.tokenpost.kr/article-115672",
      urlToImage:
        "https://www.tokenpost.kr/assets/uploads/202212128e8c9353af1992de3.jpg",
      publishedAt: "2022-12-12T00:48:00Z",
      content: "",
    },
    {
      source: { id: null, name: "Blockmedia.co.kr" },
      author: "블록미디어 최동녘 기자",
      title:
        "[CME 주간 데이터] 기관 비트코인 익스포저 감소, 주식 시장 하락에도 비트코인 상승 - 블록미디어",
      description:
        "기관 투자자들의 비트코인 선물 미결제 약정 수가 증가했다. 미국 상품선물거래위원회(CFTC)가 발표한 시카고상품거래소(CME) 비트코인 선물 미결제 약정은 11월 29일 1만 5486건에서 12월 6일 1만 4499건으로 987건 줄었다. 장기 투자 펀드는 롱 포지션을",
      url: "https://www.blockmedia.co.kr/archives/278867",
      urlToImage:
        "https://www.blockmedia.co.kr/wp-content/uploads/2022/08/CME.jpg",
      publishedAt: "2022-12-12T00:45:00Z",
      content:
        "[ ] . (CFTC) (CME) 11 29 1 5486 12 6 1 4499 987 . . 776 5279 . .\r\n 6557, 1278 . 685 , 91 . 4268 794 . 1074 7676.\r\n 12 11 1 7165.3 . , 1.2% . .\r\n 1 1004.62 3.3% . S&amp;P500 2.9% 3934.4 . 1809.4 . , .… [+155 chars]",
    },
    {
      source: { id: null, name: "Kbench.com" },
      author: null,
      title:
        "루머 끝에 출시 확정된 리터널 PC판, 권장 메모리가 32GB 메모리? - 케이벤치 (KBench)",
      description: null,
      url: "https://kbench.com/?q=node/239609",
      urlToImage:
        "https://images.kbench.com/kbench/article/thumbnail/239609_thumb.jpg",
      publishedAt: "2022-12-12T00:36:03Z",
      content: "<td>\r\n</td>",
    },
    {
      source: { id: null, name: "Hankyung.com" },
      author: null,
      title: '"4분기 영업익 반토막" 예고에…삼성전자 6만원 붕괴 - 한국경제',
      description:
        '"4분기 영업익 반토막" 예고에…삼성전자 6만원 붕괴, 신현아 기자, 증권',
      url: "https://www.hankyung.com/finance/article/2022121291666",
      urlToImage: "https://img.hankyung.com/photo/202212/01.32088580.1.jpg",
      publishedAt: "2022-12-12T00:35:38Z",
      content:
        ". . ' ' . , . '' . ' ' . , . .' ' , , 12 ' ', ' ', ' ' . ~ .(12 25 ) 3 7 12 . (Read&amp;Play Kids) (15 17) . (1), &amp; ( 1), 5 , (1), 1( ) , 12 31 , 12 25 .",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "예상대로 빅스텝 가나…美, 올해 마지막 금리 인상 / 연합뉴스TV (YonhapnewsTV) - 연합뉴스TV",
      description:
        "예상대로 빅스텝 가나…美, 올해 마지막 금리 인상[앵커] 미국 중앙은행, 연방준비제도가 이번 주 올해 마지막 금리 인상을 단행합니다. 속도 조절을 시사한 가운데 0.5%P, 빅스텝 인상이 유력하게 관측되는데요. 내년 금리 정책 기조에 대한 제롬 파월 연준 의장의 발언에도 관심이 집...",
      url: "https://www.youtube.com/watch?v=9mbynYm8CTU",
      urlToImage: "https://i.ytimg.com/vi/9mbynYm8CTU/maxresdefault.jpg",
      publishedAt: "2022-12-12T00:30:04Z",
      content: null,
    },
    {
      source: { id: null, name: "Blockmedia.co.kr" },
      author: "블록미디어",
      title:
        "중국 디지털 위안화 만기 소멸일 있다--소비 촉진, 중국 제품 사용 유도 통제 프로그램(ft. 비트코인) - 블록미디어",
      description:
        '중국이 중앙은행 발행 디지털화폐(CBDC)인 디지털 위안화에 만기 소멸일을 둔 사실을 공개했다. 비트코인 매거진은 "사람들에게 저축을 허용하지 않음으로써 강제로 소비하게 하기 위한 것"이라고 이유를 설명했다. 비트코인 매거진은 "CBDC는 노예제도이고 비트코인은 자유다"고',
      url: "https://www.blockmedia.co.kr/archives/278885",
      urlToImage:
        "https://www.blockmedia.co.kr/wp-content/uploads/2020/11/중국-권력-상징.jpg",
      publishedAt: "2022-12-11T22:46:00Z",
      content: "“ ” . “CBDC ” . “ ” . . ET BFSI . . .  .",
    },
    {
      source: { id: null, name: "Wowtv.co.kr" },
      author: null,
      title:
        "뉴욕증시, 금주 11월 CPI 및 FOMC 앞둔 '빅 위크'…유가·비트코인 하락 [출근전 꼭 글로벌브리핑] - 한국경제TV",
      description:
        "[글로벌시장 지표 / 12월 12일 오전 6시 현재]   [미국시장 금주 체크포인트] 이번 주(12일~16일) 뉴욕증시는 미국의 11월 소비자물가지수(CPI)와 연방준비제도(Fed·연준)의 연방공개시장위원회(FOMC)에 따라 방향...",
      url: "https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202212120005",
      urlToImage:
        "https://img.wowtv.co.kr/wowtv_news/dnrs/20221212/B20221212064405447.jpg",
      publishedAt: "2022-12-11T21:48:00Z",
      content:
        "[ / 12 12 6 ]\r\n[ ]\r\n(12~16) 11 (CPI) (Fed·) (FOMC) .\r\nFOMC 13() 11 (CPI) . . .\r\n11 (CPI) 0.2% , 7.3% . 0.4% , 7.7% . 11 CPI 0.4%, 6.1% . 0.3% 6.3% .\r\n11 , . 11 (PPI) . 11 .\r\n13~14 12 FOMC . ( 0.75% )… [+1011 chars]",
    },
    {
      source: { id: null, name: "Yna.co.kr" },
      author: "이지헌",
      title: "금융당국, 애플페이 신용정보법 저촉 여부 검토 - 연합뉴스",
      description:
        "(서울=연합뉴스) 이지헌 기자 = 애플사의 비접촉식 간편결제 시스템인 애플페이의 결제처리 방식이 국내 신용정보법 등에 저촉될 소지가 있다며 관계...",
      url: "https://www.yna.co.kr/view/AKR20221210040500002",
      urlToImage:
        "https://img7.yna.co.kr/etc/inner/KR/2022/12/10/AKR20221210040500002_01_i_P4.jpg",
      publishedAt: "2022-12-11T21:13:02Z",
      content:
        '[ ]\r\n(=) = .\r\n 12 " " .\r\n · .\r\n.\r\n , .\r\n .\r\n 2013 .\r\n .\r\n ( ) .\r\n , 2019 6 (NFC) \' \' .\r\n NFC .\r\n .\r\n ·() , .\r\n 290 NFC 10% .\r\n . 5 .\r\n , " " .\r\n pan@yna.co.kr\r\n okjebo&lt;(c) , - &gt;2022/12/12 06:13',
    },
    {
      source: { id: null, name: "Chosun.com" },
      author: "조선일보",
      title:
        "월경이 왜 힘들어야 하죠? 20대 여성 CEO의 발칙한 도전 - 조선일보 - 조선일보",
      description:
        "월경이 왜 힘들어야 하죠 20대 여성 CEO의 발칙한 도전 스타트업 취중잡담 월경디스크 포이컵 만든 스타트업 듀이랩스의 임지원 대표",
      url: "https://www.chosun.com/economy/startup_story/2022/12/12/6RV22YXXEJHOTDFBMPCIZXFR64/",
      urlToImage:
        "https://images.chosun.com/resizer/W2xJptz2sqSlNoG801ehuJHF-es=/1200x630/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/GRIBNO5LYREH5G4KBCWHSP5YFA.JPG",
      publishedAt: "2022-12-11T21:00:32Z",
      content: null,
    },
    {
      source: { id: null, name: "Chosun.com" },
      author: "조선비즈",
      title:
        "‘독불장군’ 인텔이 달라졌다… 삼성전자·TSMC에 수주 기회 확대 - 조선비즈 - 조선비즈",
      description:
        "독불장군 인텔이 달라졌다 삼성전자·TSMC에 수주 기회 확대 인텔 공정부문 수장 과거와 달리 인텔 혼자 할 필요 없다 삼성전자, TSMC의 최첨단 공정과 협업 가능성 시사 칩렛 생산기술 고도화삼성 등에 칩 블록 발주할수도",
      url: "https://biz.chosun.com/it-science/ict/2022/12/12/Q33DZFU2PFFOHC5NI4S7BPW5PY/",
      urlToImage:
        "https://biz.chosun.com/resizer/qf2est6SIcE328Tb61cixqnvIO4=/1200x630/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/WEKTZE5XMBLUDACNKE4K45WU5U.jpg",
      publishedAt: "2022-12-11T21:00:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Nate.com" },
      author: null,
      title:
        '김수현, 얼굴이 얼마나 작은거야?…"휴대폰에 다 가려져" | 방송 : 네이트 연예 - 네이트 뉴스',
      description:
        "방송/가요>전체 뉴스: [OSEN=박근희 기자] 배우 김수현이 근황을 공개했다.11일 오후 김수현은 한 장의 사진을 게재했다.공개된 사진은 거울 셀카를 찍고 있는 김수현의 모습. 김수현은 메이크업을 하고 남다른 잘생김을 과시하고 있다. 카메라보다 작은 얼굴 크기를 자랑하는 ...",
      url: "https://news.nate.com/view/20221211n14840",
      urlToImage:
        "https://news.nateimg.co.kr/orgImg/pt/2022/12/11/202212112036775419_6395c2afaf817.jpg",
      publishedAt: "2022-12-11T11:48:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Blockmedia.co.kr" },
      author: "James Jung 기자",
      title:
        "암호화폐 싫어하는 이 사람이 암호화폐 매매를 하려는 이유(ft. 마켓 메이커) - 블록미디어",
      description:
        '"매우 치명적으로 암호화폐에 반대하고 있을 걸." 알렉스 게르코(사진)의 트위터 프로필에는 이렇게 적혀 있습니다. 암호화폐에 대해 적의가 있는 것 같습니다. 성격도 불같습니다. # 친 암호화폐와 반 암호화폐 3ac을 만들어 사고를 크게 친 주슈가 지난 10월 트위터에 이렇게',
      url: "https://www.blockmedia.co.kr/archives/278860",
      urlToImage:
        "https://www.blockmedia.co.kr/wp-content/uploads/2022/12/XTX_알렉스_게르코.jpg",
      publishedAt: "2022-12-11T11:22:00Z",
      content:
        "[ James Jung ] “ .” () . . .\r\n# \r\n3ac 10 .\r\n“ (HFT) , XTX , HRT, .\r\n , , .”\r\nHFT(High Frequency Trading) 1 (Market Making) . MM .\r\n . HFT XTX .\r\n HFT . .\r\nXTX ?\r\n# XTX, 392 \r\n‘ XX’ . HFT .\r\n ? . 7 ‘X… [+257 chars]",
    },
    {
      source: { id: null, name: "Imbc.com" },
      author: "김윤미",
      title: "착공 12년 만에 가동하는 신한울1호기‥내부 모습은? - MBC뉴스",
      description:
        "다음 소식입니다. 국내 27번째 새 원전인 신한울 1호기가 최근착공 12년 만에 본격적인 상업운전에 들어갔습니다. 당초 2017년에 가동을 시작할 예정이었지만, 경북 ...",
      url: "https://imnews.imbc.com/replay/2022/nwdesk/article/6435277_35744.html",
      urlToImage:
        "https://image.imnews.imbc.com/replay/2022/nwdesk/article/__icsFiles/afieldfile/2022/12/11/desk_20221211_201544_1_8_Large.jpg",
      publishedAt: "2022-12-11T11:16:49Z",
      content:
        ".\r\n27 1 12 . \r\n2017 , .\r\n' ' .\r\n.\r\n. \r\n27 . \r\n1. \r\n23% .\r\n'' .\r\n40% 20 .\r\n. \r\n1 2 , . \r\n46m . \r\n76m. \r\n24 . \r\n1 22, .\r\n, . \r\n. \r\n[/ ]\r\n\" .\" \r\n2010 5 . \r\n.\r\n[/1]\r\n\" .\"\r\n2 3, 4 30 .\r\n27% 2030 32.4% . \r… [+73 chars]",
    },
    {
      source: { id: null, name: "Nate.com" },
      author: null,
      title:
        '경광봉 번쩍 "안됩니다!"…성탄절 트리 앞이 삼엄해진 이유 - 네이트 뉴스',
      description:
        "사회>사회일반 뉴스: 백화점 외관에 걸린 스크린 속 무도회장의 문이 열리자 시민들은 휴대전화를 치켜들고 카메라 셔터를 누르기 바빴다. 금요일인 지난 9일 오후 8시, 서울 중구 신세계백화점 본점 본관 앞 풍경이다. 이날 건너편 인도는 백화점의 크리스마스 조명을 구경하려는 ...",
      url: "https://news.nate.com/view/20221211n13608",
      urlToImage:
        "https://news.nateimg.co.kr/orgImg/jo/2022/12/11/671d8008-b478-490d-aace-acf606b0f446.jpg",
      publishedAt: "2022-12-11T09:36:00Z",
      content:
        ". 9 8, . 300 .\r\n. ! DANGER . . . 400m . .\r\n2· \r\n . , , .·, ·, 28 . .\r\n50 · . 2 . 10 30 . .\r\n10 \r\n. 31 3 . 19 2020 , . 10 , . 28 . . 2001 5 9 .. 2019 487 760 . .\r\n. 23 31 , 6 70 . 23~24, 30~31 60 . .\r… [+148 chars]",
    },
  ],
};

export default sample;
