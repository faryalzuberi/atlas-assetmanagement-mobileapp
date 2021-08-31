import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import { getDailyNav } from '../config/api/nav';

export default () => {
    const { isLoading, error, data, refetch } = useQuery(
        'getDailyNav',
        getDailyNav,
        { select: (parentFunds) => parentFunds },
    );
    const [title, setTitle] = useState([]);

    const [dailyNav, setDailyNav] = useState({
        tableTitle: [],
        tableContent: []

    });

    const [dailyNav1, setDailyNav1] = useState({
        tableTitle: [],
        tableContent: []
    });
    const [dailyNav2, setDailyNav2] = useState({
        tableTitle: [],
        tableContent: []
    });
    const [dailyNav3, setDailyNav3] = useState({
        tableTitle: [],
        tableContent: []
    });
    const setValue = async (data) => {
        console.log("data", data)
        if (data?.data?.data?.parent_funds) {
            const navTitle = []
            for (const [key, value] of Object.entries(data?.data?.data?.parent_funds)) {
                navTitle.push(key)
            }
            setTitle(navTitle)

            for (const [key, value] of Object.entries(data?.data?.data?.parent_funds)) {
                const fundValue = value;
                console.log(navTitle)
                if (key === navTitle[0]) {
                    let tabCol = [];
                    let tabContent = [];
                    for (const [key, value] of Object.entries(fundValue)) {
                        tabCol.push(key);
                        tabContent.push(value);
                    }
                    setDailyNav({
                        ...dailyNav,
                        tableTitle: tabCol,
                        tableContent: tabContent,
                    }
                    )

                }
                if (key === navTitle[1]) {
                    let tabCol = [];
                    let tabContent = [];
                    for (const [key, value] of Object.entries(fundValue)) {
                        tabCol.push(key);
                        tabContent.push(value);
                    }
                    setDailyNav1({
                        ...dailyNav1,
                        tableTitle: tabCol,
                        tableContent: tabContent,

                    })
                }
                if (key === navTitle[2]) {
                    let tabCol = [];
                    let tabContent = [];
                    for (const [key, value] of Object.entries(fundValue)) {
                        tabCol.push(key);
                        tabContent.push(value);
                    }
                    setDailyNav2({
                        ...dailyNav2,
                        tableTitle: tabCol,
                        tableContent: tabContent,

                    })
                }
                if (key === navTitle[3]) {
                    let tabCol = [];
                    let tabContent = [];
                    for (const [key, value] of Object.entries(fundValue)) {
                        tabCol.push(key);
                        tabContent.push(value);
                    }
                    setDailyNav3({
                        ...dailyNav3,
                        tableTitle: tabCol,
                        tableContent: tabContent,

                    })
                }
            }
        }
    }

    useEffect(() => {
        setValue(data);
    }, [data]);
   
    return {
        dailyNav,
        dailyNav1,
        dailyNav2,
        dailyNav3,
        tableHead: () => {
            let navHead = [];
            if(dailyNav1?.tableContent[0]){
                for (const [key, value] of Object.entries(dailyNav1?.tableContent[0])) {
                    if (value !== '-') {
                        if(key !== 'DATE'){
    
                            navHead.push(key);
                        }
                       
                    }
                }
            }
            
           
            return  {navHead}
        },
        title,
        isLoading,
        date: dailyNav1?.tableContent[0]?.DATE
    }
}

