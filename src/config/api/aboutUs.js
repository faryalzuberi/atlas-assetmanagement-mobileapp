import {instanceAdcom} from '../http';

const getVisionMission = async () => {
  return instanceAdcom
    .get('/webservice_for_afl_app.php?fun=format1&id=258')
    .then(res => {
      let json = {
        data: res?.data?.data,
        success: res?.data?.success,
        error: false,
      };
      return json;
    })
    .catch(error => {
      const {response} = error;
      const {request, ...errorObject} = response;
      let json = {
        data: errorObject?.data?.data,
        success: errorObject?.data?.success,
        error: true,
      };
      return json;
    });
};

const getIntroduction = async () => {
  return instanceAdcom
    .get('/webservice_for_afl_app.php?fun=format1&id=605')
    .then(res => {
      let json = {
        data: res?.data?.data,
        success: res?.data?.success,
        error: false,
      };
      return json;
    })
    .catch(error => {
      const {response} = error;
      const {request, ...errorObject} = response;
      let json = {
        success: 'true',
        data: {
          'Atlas Asset Management Limited':
            'Atlas Asset Management Limited (AAML), an Atlas Group Company, was incorporated on 20th August, 2002 as an unlisted public limited company. AAML as a Non-Banking Finance Company (NBFC) is licensed & regulated by Securities & Exchange Commission of Pakistan to perform Asset Management, Investment Advisory Services, Private Equity and Venture Capital Fund Management Services and REIT Management Services, as per the NBFC (Establishment and Regulations) Rules, 2003 & NBFC and Notified Entities Regulations, 2008, Private Funds Regulation, 2015, and the Real Estate Investment Trust Regulations, 2015, as a Pension Fund Manager to manage voluntary pension funds (under Voluntary Pension System Rules, 2005). AAML is a wholly owned subsidiary of Shirazi Investments (Pvt.) Limited. AAML manages assets on behalf of retirement funds, welfare organizations, insurance companies, multinationals, NBFCs and individuals. \n\nAAML strives to be a market leader in providing quality fund management services with customer satisfaction as its aim, and is consistently committed to offering its investors the best possible returns on a diverse range of products, meeting not only the customers current requirements but also exceeding their future expectations. Moreover, with its strong emphasis on systems and controls, quality human resource and backing of Atlas Group, AAML enjoys a distinct advantage. \n\nRating: The Pakistan Credit Rating Agency has assigned an asset manager rating of “AM2+” as of 24th December, 2020 to the Company. The rating reflects that the Company meets high investment management industry standards and benchmarks with noted strengths in several of the rating factors. \n\n\nCompany Registration Number\nK – 08954 of 2002-2003\n\n\nCompany Incorporation Number\nCUIN 0044252\n\n\nAsset Management Services Licence Number\nSCD/AMCW/09/AAML/AMS/04/2019\n\n\nInvestment Advisory Services Licence Number\nAMCW/02/AAML/IAS/02/2018\n\n\nPrivate Equity and Venture Capital Fund Management Services License Number\nSCD/AAML/PE&VC/01/2021\n\n\nREIT Management Services License Number\nSCD/AAML/REIT/01/2021\n\n\nNational Tax Number\n1828097-8\n\n\nStatus of Company\nMedium Sized Company as defined in Third Schedule of the Companies Act, 2017\n\n\nRegistered Office\nGround Floor, Federation House, Sharae Firdousi, Clifton, Karachi 75600 UAN – KHI: 111-MUTUAL (111-688-825), PABX: (92-21) 35379501 – 4, Fax: (92-21) 35379280\n\n\nSales Offices\nSavings Center Karachi: Ground Floor, Faiyaz Center, Shahra-e-Faisal (opp. FTC Building), Karachi-74400. Ph: 0300-2824454, 0332-2689184, 0333-9789058, (92-21) 34522601-2, 34522604, 34522608\n\n\nSITE Office Karachi: C/O Atlas Honda Ltd., F/36, Estate Avenue, S.I.T.E., Karachi. Ph: 0300-2144271\nLandhi Office Karachi: C/o Atlas Engineering Ltd, 15th Mile, National Highway, Landhi, Karachi. Ph: 0300-2646929, 0333-1308185\n\n\nSavings Center Lahore: Building 64, Block-XX, Khayaban-e-Iqbal, Phase III, DHA, Lahore. Ph: 0321-4181292, 0321-4933363, (92-42) 32560890-92, 37132688-89\nSavings Center Islamabad: Ground Floor, East End Plaza, Plot No. 41, Sector F-6/G6, Ataturk Avenue, Blue Area, Islamabad. Ph: 0334-3379625, 051-2871831-34\n\n\nRawalpindi Office: C/O Atlas Honda ltd., Ground floor, Islamabad Corporate Center, Golra Road, Rawalpindi. Ph : 0334-5167035, 051-2801140\nFaisalabad Office: C/o. Atlas Honda Limited, Customer Care Center, First Floor, Meezan Executive Tower, 4-Liaqat Road, Faisalabad. Ph: 0300-7966162, (92-41) 2541011, 2541013\n\n\nMultan Office: C/o. Atlas Regional Office, Azmat Wasti Road, Near Dera Adda, Multan. Ph: 0313-6063604, (92-61) 4570431-4\nHyderabad Office: C/o. Atlas Honda Ltd., 3rd Floor, Dawood Center, Opposite Foundation Public School, Auto Ban Road, Hyderabad. Ph: 0300-2824454\n\n\nAuditor of the Company\nShineWing Hameed Chaudhri & Co., Chartered Accountants.\n\n\nLegal Advisor\nMoshin Tayebaly & Co.\n\n\nMembership of Industry Associations and Trade Bodies\nMutual Funds Association of Pakistan\n\n\nManagement Association of Pakistan',
          'Urdu-image':
            'https://www.atlasfunds.com.pk/wp-content/uploads/2019/12/aaml_introduction_urdu-scaled.jpg',
        },
      };
      return json;
    });
};

const getBoardOfDirectors = async () => {
  return instanceAdcom
    .get('/webservice_for_afl_app.php?fun=format2&id=579')
    .then(res => {
      let json = {
        data: res?.data?.data,
        success: res?.data?.success,
        error: false,
      };
      return json;
    })
    .catch(error => {
      const {response} = error;
      const {request, ...errorObject} = response;
      let json = {
        success: 'true',
        data: {
          members: [
            {
              name: 'Mr. Iftikhar H. Shirazi',
              designation: 'Chairman',
              description:
                'Mr. Iftikhar H. Shirazi graduated with a Bachelor of Science in Finance from Notre Dame De Namur University (formerly College of Notre Dame), USA, and completed his OPM from Harvard Business School, USA. He has over 30 years of corporate management experience, more particularly in financial and trading sectors. He has to his credit, work experience at Bank of Tokyo-Mitsubishi, Yamaichi Securities, and Toyota Tsusho Corporation.He is currently Chairman of Shirazi Investments (Pvt) Limited, Shirazi Trading Company (Private) Limited, Atlas Foundation and Atlas Information Technology Resource Centre. He is also a member of the SAARC Chamber of Commerce & Industry and Federation of Pakistan Chambers of Commerce and Industry (FPCCI). He is also serving on the Board of Governors of the British Overseas Association. He was also a member of Aga Khan Resource Development Committee and FPCCI Executive Committee. He has also served Management Association of Pakistan as their Vice President. He also enjoys membership of a number of prestigious associations that include Karachi Chamber of Commerce & Industry, Harvard Club of New York and Pakistan and Young Presidents Organization. He was also President of International Club, Notre Dame De Namur (formerly College of Notre Dame), USA. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2019/11/Iftikhar_Shirazi.jpg',
            },
            {
              name: 'Mr. Frahim Ali Khan',
              designation: 'Non-Executive Director',
              description:
                'Mr. Frahim Ali Khan has over 50 years of experience in General Management, Finance, Investment and Taxation. He graduated in Commerce from the Karachi University in 1965 and also obtained a degree in law from the same University. He has also attended the Senior Managers’ Program from Harvard University, USA, Financial Management from Stanford University, USA, and General Management Program from Insead University, France. He joined the Atlas Group in 1967 and has served in different senior positions. Currently, his other directorships include Atlas Insurance Limited, Atlas Engineering Limited, Atlas Power Limited, Shirazi Trading Company (Pvt.) Limited, Atlas Hi-Tech Limited, Atlas Autos (Pvt.) Limited, Atlas Metals (Pvt.) Limited and Atlas Foundation. Earlier, he has also served on the Boards of Atlas Honda Limited and Atlas Battery Limited, and has been the CEO of Shirazi Investments (Pvt.) Limited, Shirazi Trading Company (Pvt.) Limited, and former Atlas Investment Bank Limited. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2019/03/team7.jpg',
            },
            {
              name: 'Mr. M. Habib-ur-Rahman',
              designation: 'Non-Executive Director',
              description:
                'Mr. M. Habib-ur-Rahman is an FCA from the Institute of Chartered Accountants in England & Wales and has attended management level programme (PMD) from Harvard Business School, USA. He has been a founding member and past Chairman / Director of the Mutual Funds Association of Pakistan. He played an instrumental role in setting up the first open-end mutual fund in the private sector in Pakistan He has been Securities and Exchange Commission of Pakistan (SECP) nominee on the Board of Karachi Stock Exchange in 2000, 2001, & 2003, and has also been a member of SECP Advisory Group on Capital Markets, member of the SECP Enquiry Committee (appointed in 2001) on management of Exposure Rules by KSE / LSE and member of the SECP Enquiry Committee (appointed in 2013) on 2008 financial crisis. He was the Chief Executive Officer of Atlas Asset Management Limited from March 2004 till March 2018. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2019/02/Habib-ur-Rahman.jpg',
            },
            {
              name: 'Mr. Tariq Amin',
              designation: 'Independent Director',
              description:
                'Mr. Tariq Amin is the Chairman of Orkila Pakistan (Private) Limited, a leading company dealing in chemicals. He is also on the Boards of Pakistan Gum and Chemicals Limited, the Salim Habib Education Foundation and the Education City. He has varied experience both in private and public sectors. He is a law graduate from the University of Karachi. He also holds a Masters degree in English from the University of Karachi and a Post Graduate Diploma in Development Administration from the University of Leeds. Mr. Amin has been past Chairman of the Privatization Commission, Sindh. He has also been President of the Overseas Investors Chambers of Commerce & Industry (OICCI) and also the Chairman of SITE Association of Industry for four years. Mr. Amin was conferred the civil award of Chevalier De L’ordre National Du Merite by the Government of France 2001. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2019/02/Mr.-Tariq-Amin.jpg',
            },
            {
              name: 'Mr. Ali H. Shirazi',
              designation: 'Non-Executive Director',
              description:
                'Mr. Ali H. Shirazi graduated with a BA from Yale University, U.S.A. in 2000 and thereafter completed his Masters in Law from Bristol University, U.K. in 2005. He has worked with the Bank of Tokyo-Mitsubishi in New York as well as American Honda in Torrance, California. He is the Chief Executive Officer at Atlas Battery Limited and is a member of the Group Executive Committee, responsible for Group’s financial services. He is on the Board of Atlas Asset Management Limited, Atlas Engineering Limited, Atlas Insurance Limited, Atlas Metals (Private) Limited, Pakistan Society of Training and Development (Vice President), YPO (Young Professional Organization), National Management Foundation (sponsoring body of LUMS) and Techlogix International Limited. He is a ‘Certified Director’ from the Pakistan Institute of Corporate Governance. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2019/02/Mr.-Ali-H.-Shirazi.jpg',
            },
            {
              name: 'Ms. Zehra Naqvi',
              designation: 'Independent Director',
              description:
                'Ms. Zehra Naqvi was the Chief Executive Officer of Chubb Insurance Pakistan, (a wholly owned subsidiary of Chubb INA International Holdings Limited, Delaware, USA) from September 2005 to September 2017. She has over 35 years of work experience in the insurance sector. Prior to joining Chubb, she worked with Royal Exchange Assurance, a branch of Guardian Royal Exchange, UK and Adamjee Insurance Company in Pakistan. Ms. Naqvi holds a B.Sc. Degree, and an MBA Degree from the Institute of Business Administration, Karachi University. She is a Chartered Insurer from the Chartered Insurance Institute, UK and is a Certified Director from Institute of Chartered Accountants of Pakistan. She presently serves as a Non-executive Director on the Board of Chubb Insurance Pakistan Limited and as an Independent Director on the Board of Abbott Laboratories Pakistan Limited. She has served as an elected Member of the Executive Committee of the Insurance Association of Pakistan and of the Executive Committee of The American Business Council. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2019/03/zahra_naqvi.jpg',
            },
            {
              name: 'Mr. M. Abdul Samad',
              designation: 'Chief Executive Officer',
              description:
                'Mr. Muhammad Abdul Samad has a vast experience of local investment management industry. He joined Atlas Asset Management Limited (AAML) in November 2005, and has held C-suite positions for over a decade, including the Chief Investment Officer and Chief Operating Officer positions. He attended Advanced Management Program at INSEAD, on nomination by the Atlas Group. In more than twelve years of his association with AAML, he has actively been involved in new business initiatives, marketing, human resource, and risk management & compliance areas. Mr. Samad was instrumental in the outsourcing of back office functions at AAML. He has also contributed to industry related issues at association level, and was a member of technical committee on retirement schemes. Prior to joining AAML, Mr. Samad spearheaded the research function at National Investment Trust Limited, and was also a part of various merger, acquisition and corporate governance related matters beside research. He has a significant Board experience, where he has served as a director on the board of nineteen listed companies, including Atlas Battery Limited, Lucky Cement, Berger Paints, Mirpurkhas Sugar, amongst others. Currently he is serving as a Director on the Board of MUFAP also. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2019/12/mas11.jpg',
            },
          ],
          'Urdu-image':
            'https://www.atlasfunds.com.pk/wp-content/uploads/2019/12/Website-in-Urdu-text-Dec-2019.jpg',
        },
      };
      return json;
    });
};

const getTeamManagement = async () => {
  return instanceAdcom
    .get('/webservice_for_afl_app.php?fun=format2&id=3604')
    .then(res => {
      let json = {
        data: res?.data?.data,
        success: res?.data?.success,
        error: false,
      };
      return json;
    })
    .catch(error => {
      const {response} = error;
      const {request, ...errorObject} = response;
      let json = {
        success: 'true',
        data: {
          top_description:
            'Atlas Asset Management Team, which comprises of the CEO and the Heads of Departments, oversees the working of the Company. The Management Team members include:',
          members: [
            {
              name: 'Mr. Muhammad Abdul Samad',
              designation: 'Chief Executive Officer',
              description:
                'Mr. Muhammad Abdul Samad has a vast experience of local investment management industry. He joined Atlas Asset Management Limited as a Fund Manager – Equity Funds in November 2005, and has held C-suite positions for over a decade, including the Chief Investment Officer and Chief Operating Officer positions. He also attended Advanced Management Program at INSEAD Fontainebleau, on nomination by the Atlas Group. Prior to joining AAML, Mr. Samad spearheaded the research function at National Investment Trust Limited, and was also a part of various merger, acquisition and corporate governance related matters beside research. He has a significant Board experience, where he has served as a director on the board of nineteen listed companies, including Atlas Battery Limited, Lucky Cement, Berger Paints, Mirpurkhas Sugar, amongst others. Currently , he is serving as a Director on the Board of Mutual Funds Association of Pakistan and also Chairman of its Accounts & Taxation Committee. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2020/01/mas_pp.jpg',
            },
            {
              name: 'Mr. Khalid Mahmood',
              designation: 'Chief Investment Officer',
              description:
                'Mr. Khalid Mahmood is the CIO at Atlas Asset Management having over 15 years of rich experience primarily in Fund Management and Equity Research with various financial institution of Pakistan. He has been with the organization since March, 2008 and has worked in multiple roles during his tenure. Prior to joining Atlas Asset Management Limited Mr. Mahmood was associated with AMZ Asset Management where he worked as an Equity Asset Class Specialist. He also possesses immense experience in Equity Research and has extensively covered Pakistan’s economic and financial affairs during his association with some of the leading financial institutions which include Pak Kuwait Investment Company Limited and National Investment Trust. Mr. Mahmood holds an MBA degree with Majors in Finance from Bahria University. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2020/01/kdm_pp.jpg',
            },
            {
              name: 'Ms. Qurrat-ul-Ain Jafari',
              designation: 'Chief Financial Officer',
              description:
                'Ms. Qurrat-ul-ain Jafari has more than 16 years of experience in the field of Finance, Operation, Secretarial function and Internal Audit. She joined Atlas Asset Management Limited as Chief Internal Auditor in December 2010 and held the position of Chief Financial Officer & Company Secretary from August 01,2015 till January 31,2018. Ms.Qurrat-ul-ain is a Fellow member of Association of Chartered Certified Accountants, member of Certified Internal Control Auditor and holds a Masters in Economics degree from University of Karachi. Prior to joining AAML, she was working as Head of Finance & Company Secretary at PICIC Asset Management Company Limited where she was responsible for the financial affairs and secretarial function of the company. She has also worked at Pakistan State Oil, where she served the organization on various positions. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2020/01/qaj_pp.jpg',
            },
            {
              name: 'Ms. Mishaal H. Shirazi',
              designation: 'Head of Sales & Marketing',
              description:
                'Ms. Mishaal H. Shirazi has a diversified international experience in financial services, underwriting and risk, credit, capital markets and multi-level capital structures. She graduated in Foreign Affairs, Finance and South Asian Studies from University of Virginia, USA. She has an overall 7 year experience with 5 year portfolio management experience as A. Vice President with the Bank of Tokyo-Mitsubishi in New York and was nominated for the Global leadership program by Mitsubishi UFJ Financial Group, California. At Atlas Asset Management her core role is overlooking overall sales function and is responsible to develop and implement strategy to maximize corporate and retail sales and assets under management. During her association with AAML, she is also actively involved in new business initiatives, strategy, product development and marketing. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2020/01/mhs_pp.jpg',
            },
            {
              name: 'Mr. Tariq Ahmed Siddiqui',
              designation: 'Head of Information Technology',
              description:
                'Mr. Tariq Ahmed Siddiqui has a diversified experience in the field of Information Technology, software development, database management and faculty member. He has done his Masters in Computer Science from University of Karachi. He has overall 20 years of working experience in the field of Information Technology. He joined Atlas Asset Management Limited as Manager Database in June, 2008. He contributed in software development for the facilitation to investors and company as well. Prior to his appointment, he was working as a Software Engineer in Soorty Enterprises (Pvt.) Ltd. where he was responsible for software development. He was also a visiting faculty member in Bahria University. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2020/01/tas_pp.jpg',
            },
            {
              name: 'Mr. Muhammad Umar Khan',
              designation: 'Head of Portfolio Management',
              description:
                'Mr. M. Umar Khan has done his Masters in Finance (2009) and Bachelors in Economics (2007) from University of Liverpool (UK). He joined Atlas Asset Management Limited in February 2011. Prior to joining AAML, he has also worked for Intrum Justitia Ltd (Europe’s largest Debt Recovery firm) as Financial Debt Advisor. Mr. M. Umar Khan has total experience of around eleven years and has been associated with AAML for over seven years. He has significant experience of managing multi asset class funds including Equity and Fixed Income Debt Securities as well as Settlement Operations. He was previously managing equity portfolio of pension funds and Fixed Income Portfolio in AAML. He was assigned charge of commodity portfolio and has sufficient skills in alternative investments such as commodities and derivatives contracts. He attended various courses ranging from Bank Credit Analysis, Risk Management, Islamic Banking and Corporate Governance. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2020/01/muk_pp.jpg',
            },
            {
              name: 'Mr. Faran ul Haq',
              designation: 'Head of Equities',
              description:
                'Mr. Faran ul Haq has done his BA-Hons in Accounting and Finance (2010) from University of Manchester (UK) and has passed CFA Level III in 2013. Furthermore, he is pursuing his MBA from Institute of Business Administration (IBA), Karachi. He is currently working as Head of Equities and is responsible for managing AAML Equity Portfolios. He has extensive experience in financial markets in research department and portfolio management. He started his career at AAML in 2011 as research analyst and later headed research department at AAML. He has covered all key equity market sectors and stocks in Pakistan. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2020/01/fuh_pp.jpg',
            },
            {
              name: 'Mr. Fawad Javaid',
              designation: 'Head of Fixed Income',
              description:
                'Mr. Fawad Javaid has joined Atlas Asset Management Limited as Fixed Income Fund Manager in February, 2013. Prior to joining AAML, he has worked with Pak Oman Asset Management Company in treasury department for about two and half years and with AMZ Asset Management Company Ltd as Sub Fund Manager Fixed Income for two and half years. He did his graduation with major in Mathematics and Statistics from University of Karachi. He is CMA from Institute of Cost and Management Accountants of Pakistan. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2020/01/fjd_pp.jpg',
            },
            {
              name: 'Ms. Ayesha Salahuddin',
              designation: 'Head of Separately Managed Accounts',
              description:
                'Ms. Ayesha Salahuddin is MBA from the Institute of Business Administration (IBA), Karachi and holds an M.Phil. in Business Management from the Institute of Business Management (IoBM). She is also a certified Digital Marketer holding a Diploma in Digital Marketing from IBA. She is currently responsible for overseeing Separately Managed Accounts (SMA). She is an IFMP certified professional holding FCM, MFDC & PMR certifications. She also attended various Investment and AML/CFT related Trainings. She has more than 10 years of diversified experience in the mutual fund industry. She started her career with JS Investments in the field of Marketing and Corporate Sales and joined Atlas Asset Management as Manager Marketing in September 2013. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2020/01/afq_pp.jpg',
            },
            {
              name: 'Mr. Najam Shahzad',
              designation: 'Manager Customer Services & Quality Assurance',
              description:
                'Mr. Najam Shahzad has 23 years of experience in Financial Sector including 15+ in Mutual Fund industry. He has got a diploma in Business Administration from Institute of Business Administration and holds a Certified Mutual Fund Distributor (CMFD) certificate from Institute of Capital Markets Pakistan. He has a diverse work experience and has previously served for reputed financial institutions like MCB Financial Services and Deutsche Bank AG, Karachi. He has been working for Atlas Asset Management Limited for more than 15 years. He has managed and developed experience in areas of Registrar/Transfer Agency, Customer Services, MIS/Regulatory reporting, Tax, Product strategy and Sales planning. Currently he is working in capacity of Manager Customer Services and Quality Assurance. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2020/07/nsd_pp.jpg',
            },
            {
              name: 'Ms. Zainab Kazim',
              designation: 'Company Secretary, Manager HR & Admin',
              description:
                'Ms. Zainab Kazim had joined Atlas Asset Management Limited in November 2009. She has overall experience of more than 10 years in the mutual fund industry with diversified roles majorly covering Compliance areas. She is well acquainted with the Rules and Regulations of the industry. As a Manager HR & Admin she is responsible for communicating and maintaining Atlas Culture, training employees etc and serve as a link between an organization’s management and its employees. She has attended several seminars and workshops which include Code of Corporate Governance 2019, Company Secretary Conference, Train the Trainer, Know Your Customer/ Customer Due Diligence, Rising To The Challenge – Anti Money Laundering, Future of Risk Management, workshop by International Finance Corporation (IFC) on Corporate Governance, etc. She holds MBA Degree from Institute of Business Management (IoBM) with Majors in Finance. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2020/01/zhn_pp.jpg',
            },
            {
              name: 'Mr. M. Uzair Uddin Siddiqui',
              designation: 'Chief Internal Auditor',
              description:
                'Mr. M. Uzair Uddin Siddiqui is a Member of Association of Chartered Certified Accountants (ACCA). He started his career with Deloitte Yousuf Adil (Member of Deloitte Touche & Tohmatsu Limited) in 2004. He has over 10 years of working experience in the field of Finance & Internal Audit. He had been performing several internal audit outsourcing assignments in mutual fund industry (includes IGI Funds Limited, Faysal Asset Management Limited, Askari Investment Management Limited and Al Meezan Investment Management Limited). He joined Atlas Asset Management Limited as Chief Internal Auditor and responsible for ascertaining and reporting to Audit Committee on the adequacy and effectiveness of internal controls and make recommendation for improvement. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2020/01/mus_pp.jpg',
            },
            {
              name: 'Mr. Muhammad Noman',
              designation: 'Chief Compliance Officer',
              description:
                'Mr. Muhammad Noman is a Member of the Chartered Institute of Public Finance Accountancy UK (CIPFA) as well as Fellow Member of Pakistan Institute of Public Finance Accountants (FPFA). He joined Atlas Asset Management Limited in April 2018 as Manager Compliance. He brings with him more than 16 years of diversified experience in the fields of accountancy, taxation, corporate, audit and compliance. Previously, he was associated with ABL Asset Management Company Limited as a Senior Manager Operations. He also served more than 11 years with Central Depository Company of Pakistan Limited as Deputy Manager & Section Head. He commenced his professional career from MRI-Khalid Majid Rahman Sarfaraz Rahim Iqbal Rafiq Chartered Accountants. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2020/01/mnn_pp.jpg',
            },
            {
              name: 'Mr. Shaikh Owais Ahmed',
              designation: 'Manager Risk Management',
              description:
                'Mr. Shaikh Owais Ahmed holds an MBA Degree from Institute of Business Management (IoBM) with Majors in Finance. Previously, he was associated with A.F.Ferguson & Co. – Systems & Process Assurance (SPA) division. Working as an Associate, his responsibilities included business process re-engineering, process improvement & documentation, identification of issues and risk. Currently, he is working in the capacity of Manager Risk Management and is responsible for assessing Market, Liquidity and Credit risks as well as analyzing and measuring the risks and risk adjusted performance of the fund. ',
              profile_image:
                'https://www.atlasfunds.com.pk/wp-content/uploads/2020/01/soa_pp.jpg',
            },
          ],
          'Urdu-image': '',
        },
      };
      return json;
    });
};

export {
  getVisionMission,
  getIntroduction,
  getBoardOfDirectors,
  getTeamManagement,
};
