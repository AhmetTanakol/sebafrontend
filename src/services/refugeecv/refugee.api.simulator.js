
//https://stackoverflow.com/questions/10593337/is-there-any-way-to-create-mongodb-like-id-strings-without-mongodb
const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) => s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h));

let refugee = [
  {
    "_id": "5945c5fdc3a533662f16c626",
    "index": 0,
    "email": "jondoe@company.com",
    "personalinfo": {
      "firstname": "Traci",
      "lastname": "Downs",
      "date": "Wed Mar 26 1997 04:55:30 GMT+0000 (UTC)",
      "countryofbirth": "Bermuda",
      "maritalstatus": "married",
      "language": "arabic"
    },
    "experience": [
      {
        "company": "XINWARE",
        "companylocation": "Clara",
        "startdate": "Thu Apr 13 1989 23:24:21 GMT+0000 (UTC)",
        "enddate": "Sat Feb 14 1981 14:50:17 GMT+0000 (UTC)",
        "jobdesc": "duis et laboris anim officia dolore nostrud voluptate sunt velit reprehenderit consectetur Lorem eiusmod culpa"
      },
      {
        "company": "APEXTRI",
        "companylocation": "Cecilia",
        "startdate": "Wed Jun 17 1998 07:20:11 GMT+0000 (UTC)",
        "enddate": "Fri Oct 31 2003 00:02:23 GMT+0000 (UTC)",
        "jobdesc": "laboris voluptate commodo mollit aute ullamco consequat reprehenderit cupidatat incididunt reprehenderit incididunt ipsum et sint"
      },
      {
        "company": "BUZZMAKER",
        "companylocation": "Cataract",
        "startdate": "Fri May 01 2009 02:00:40 GMT+0000 (UTC)",
        "enddate": "Tue Nov 17 1998 06:10:19 GMT+0000 (UTC)",
        "jobdesc": "aliquip ut anim magna velit commodo laborum incididunt cupidatat consequat sunt ea culpa pariatur sunt"
      }
    ],
    "certification": [
      {
        "title": "et ipsum",
        "startdate": "Fri May 12 1972 06:38:48 GMT+0000 (UTC)",
        "enddate": "Sat Nov 07 2009 18:41:26 GMT+0000 (UTC)",
        "picture": "http://placehold.it/32x32"
      },
      {
        "title": "commodo cillum",
        "startdate": "Wed Jul 11 2001 05:12:01 GMT+0000 (UTC)",
        "enddate": "Mon Feb 23 1981 23:58:07 GMT+0000 (UTC)",
        "picture": "http://placehold.it/32x32"
      }
    ],
    "skill": [
      {
        "skilltype": "et Lorem",
        "power": 9
      },
      {
        "skilltype": "aliquip officia",
        "power": 4
      },
      {
        "skilltype": "in eiusmod",
        "power": 6
      },
      {
        "skilltype": "velit mollit",
        "power": 6
      }
    ]
  },
  {
    "_id": "5945c5fdf5e2aebea410493e",
    "index": 1,
    "email": "jondoe2@company.com",
    "personalinfo": {
      "firstname": "Christian",
      "lastname": "Jarvis",
      "date": "Wed Aug 24 1977 12:31:42 GMT+0000 (UTC)",
      "countryofbirth": "Montserrat",
      "maritalstatus": "married",
      "language": "arabic"
    },
    "experience": [
      {
        "company": "ENTHAZE",
        "companylocation": "Bethpage",
        "startdate": "Fri Dec 14 2001 12:10:42 GMT+0000 (UTC)",
        "enddate": "Mon May 25 1981 08:43:10 GMT+0000 (UTC)",
        "jobdesc": "officia ut nulla labore magna qui culpa sint ut id esse amet dolore occaecat dolore"
      },
      {
        "company": "EARWAX",
        "companylocation": "Sheatown",
        "startdate": "Sat Mar 14 1970 09:47:57 GMT+0000 (UTC)",
        "enddate": "Tue Jan 30 1979 02:05:12 GMT+0000 (UTC)",
        "jobdesc": "elit laborum sunt non tempor nisi aliquip aliqua est officia eiusmod incididunt labore eiusmod magna"
      },
      {
        "company": "PHARMACON",
        "companylocation": "Ronco",
        "startdate": "Mon Jul 02 2001 12:04:54 GMT+0000 (UTC)",
        "enddate": "Sat Jul 01 1978 11:34:51 GMT+0000 (UTC)",
        "jobdesc": "enim laboris consectetur voluptate commodo fugiat quis enim anim non tempor amet ullamco sint excepteur"
      }
    ],
    "certification": [
      {
        "title": "excepteur excepteur",
        "startdate": "Wed Oct 06 2010 19:30:55 GMT+0000 (UTC)",
        "enddate": "Sun Jul 14 1996 16:02:59 GMT+0000 (UTC)",
        "picture": "http://placehold.it/32x32"
      },
      {
        "title": "amet deserunt",
        "startdate": "Fri Oct 01 1999 18:26:30 GMT+0000 (UTC)",
        "enddate": "Sat Nov 29 1997 20:14:20 GMT+0000 (UTC)",
        "picture": "http://placehold.it/32x32"
      }
    ],
    "skill": [
      {
        "skilltype": "laborum dolore",
        "power": 3
      },
      {
        "skilltype": "dolore cillum",
        "power": 8
      },
      {
        "skilltype": "qui id",
        "power": 7
      },
      {
        "skilltype": "aliqua reprehenderit",
        "power": 8
      }
    ]
  },
  {
    "_id": "5945c5fd7d47885b8689ca99",
    "index": 2,
    "email": "jondoe1@company.com",
    "personalinfo": {
      "firstname": "Howe",
      "lastname": "William",
      "date": "Wed Aug 25 1976 06:44:57 GMT+0000 (UTC)",
      "countryofbirth": "Colombia",
      "maritalstatus": "widowed",
      "language": "english"
    },
    "experience": [
      {
        "company": "KYAGURU",
        "companylocation": "Hayes",
        "startdate": "Sat Jun 15 2013 10:40:05 GMT+0000 (UTC)",
        "enddate": "Mon Jan 19 1976 12:38:05 GMT+0000 (UTC)",
        "jobdesc": "dolore irure officia veniam ad et ut mollit magna esse proident laboris dolor aliquip do"
      },
      {
        "company": "ECSTASIA",
        "companylocation": "Clayville",
        "startdate": "Sat Apr 19 2008 06:11:15 GMT+0000 (UTC)",
        "enddate": "Wed Jan 08 1975 17:04:53 GMT+0000 (UTC)",
        "jobdesc": "adipisicing laborum nisi laborum sunt cillum mollit ut mollit proident consequat esse exercitation pariatur est"
      },
      {
        "company": "ENTALITY",
        "companylocation": "Warren",
        "startdate": "Tue Jul 19 2005 22:54:36 GMT+0000 (UTC)",
        "enddate": "Fri Jul 19 1991 01:02:19 GMT+0000 (UTC)",
        "jobdesc": "ut qui labore proident culpa velit incididunt cillum consectetur consequat ipsum eu occaecat laborum anim"
      }
    ],
    "certification": [
      {
        "title": "nulla sit",
        "startdate": "Fri Aug 22 1986 00:01:29 GMT+0000 (UTC)",
        "enddate": "Thu Oct 02 2014 08:12:19 GMT+0000 (UTC)",
        "picture": "http://placehold.it/32x32"
      },
      {
        "title": "nulla occaecat",
        "startdate": "Mon Apr 10 1995 17:17:10 GMT+0000 (UTC)",
        "enddate": "Sat Jun 08 1985 05:47:13 GMT+0000 (UTC)",
        "picture": "http://placehold.it/32x32"
      }
    ],
    "skill": [
      {
        "skilltype": "consequat esse",
        "power": 0
      },
      {
        "skilltype": "non velit",
        "power": 0
      },
      {
        "skilltype": "ea voluptate",
        "power": 4
      },
      {
        "skilltype": "labore eu",
        "power": 7
      }
    ]
  },
  {
    "_id": "5945c5fd9011880d3043847a",
    "index": 3,
    "email": "jondoe2@company.com",
    "personalinfo": {
      "firstname": "Tia",
      "lastname": "Briggs",
      "date": "Sat Sep 11 1993 12:50:06 GMT+0000 (UTC)",
      "countryofbirth": "Azerbaijan",
      "maritalstatus": "married",
      "language": "german"
    },
    "experience": [
      {
        "company": "ONTALITY",
        "companylocation": "Hachita",
        "startdate": "Sun Feb 14 2016 15:11:31 GMT+0000 (UTC)",
        "enddate": "Tue Sep 02 2014 10:20:01 GMT+0000 (UTC)",
        "jobdesc": "eu incididunt adipisicing proident sunt sunt eiusmod reprehenderit fugiat esse nostrud consequat sit ex reprehenderit"
      },
      {
        "company": "JETSILK",
        "companylocation": "Kipp",
        "startdate": "Mon May 25 1992 22:18:27 GMT+0000 (UTC)",
        "enddate": "Wed Apr 09 2003 20:08:19 GMT+0000 (UTC)",
        "jobdesc": "ea excepteur et consequat adipisicing dolor nostrud non quis veniam laboris exercitation veniam aliqua eiusmod"
      },
      {
        "company": "AUSTEX",
        "companylocation": "Marienthal",
        "startdate": "Fri Oct 18 1991 17:18:03 GMT+0000 (UTC)",
        "enddate": "Tue Oct 25 1983 16:05:52 GMT+0000 (UTC)",
        "jobdesc": "nisi non ullamco fugiat aliquip eiusmod velit aute elit sint et aliqua commodo dolor laboris"
      }
    ],
    "certification": [
      {
        "title": "laboris nisi",
        "startdate": "Sat Sep 30 1995 09:11:04 GMT+0000 (UTC)",
        "enddate": "Sun Jan 17 1988 14:41:12 GMT+0000 (UTC)",
        "picture": "http://placehold.it/32x32"
      },
      {
        "title": "elit laboris",
        "startdate": "Tue Jun 27 1989 03:09:08 GMT+0000 (UTC)",
        "enddate": "Sat Jun 16 1979 22:24:16 GMT+0000 (UTC)",
        "picture": "http://placehold.it/32x32"
      }
    ],
    "skill": [
      {
        "skilltype": "nostrud culpa",
        "power": 0
      },
      {
        "skilltype": "tempor dolore",
        "power": 0
      },
      {
        "skilltype": "est proident",
        "power": 8
      },
      {
        "skilltype": "aliquip elit",
        "power": 8
      }
    ]
  },
  {
    "_id": "5945c5fd1ee1560e61eeaa54",
    "index": 4,
    "email": "jondoe2@company.com",
    "personalinfo": {
      "firstname": "Berta",
      "lastname": "Potter",
      "date": "Sun Mar 27 1977 04:00:44 GMT+0000 (UTC)",
      "countryofbirth": "Bahrain",
      "maritalstatus": "single",
      "language": "english"
    },
    "experience": [
      {
        "company": "KAGE",
        "companylocation": "Belvoir",
        "startdate": "Thu Jan 04 1973 15:25:57 GMT+0000 (UTC)",
        "enddate": "Mon Jan 01 1979 03:18:50 GMT+0000 (UTC)",
        "jobdesc": "velit cupidatat voluptate nostrud tempor occaecat magna mollit incididunt ipsum culpa dolore enim ipsum aliquip"
      },
      {
        "company": "EARGO",
        "companylocation": "Manila",
        "startdate": "Fri Jan 21 1994 04:50:28 GMT+0000 (UTC)",
        "enddate": "Sat Jun 16 1990 23:18:54 GMT+0000 (UTC)",
        "jobdesc": "esse nisi reprehenderit duis in exercitation ea consequat nulla labore dolor Lorem reprehenderit fugiat velit"
      },
      {
        "company": "COSMOSIS",
        "companylocation": "Goldfield",
        "startdate": "Mon Feb 23 1998 07:46:40 GMT+0000 (UTC)",
        "enddate": "Wed Nov 09 2005 05:40:08 GMT+0000 (UTC)",
        "jobdesc": "ad nostrud nostrud consequat ea nostrud fugiat magna veniam cupidatat laborum tempor non commodo minim"
      }
    ],
    "certification": [
      {
        "title": "duis aliqua",
        "startdate": "Sat Jul 27 1996 00:56:40 GMT+0000 (UTC)",
        "enddate": "Wed Oct 01 2014 04:19:04 GMT+0000 (UTC)",
        "picture": "http://placehold.it/32x32"
      },
      {
        "title": "nisi sunt",
        "startdate": "Mon Aug 22 1988 05:58:26 GMT+0000 (UTC)",
        "enddate": "Thu May 27 1999 21:31:33 GMT+0000 (UTC)",
        "picture": "http://placehold.it/32x32"
      }
    ],
    "skill": [
      {
        "skilltype": "amet eiusmod",
        "power": 1
      },
      {
        "skilltype": "sint do",
        "power": 4
      },
      {
        "skilltype": "nostrud deserunt",
        "power": 9
      },
      {
        "skilltype": "qui duis",
        "power": 4
      }
    ]
  },
  {
    "_id": "5945c5fd1078856bfed60dfd",
    "index": 5,
    "email": "jondoe2@company.com",
    "personalinfo": {
      "firstname": "Christian",
      "lastname": "Stone",
      "date": "Mon Oct 20 2014 12:04:04 GMT+0000 (UTC)",
      "countryofbirth": "Haiti",
      "maritalstatus": "single",
      "language": "german"
    },
    "experience": [
      {
        "company": "OTHERSIDE",
        "companylocation": "Geyserville",
        "startdate": "Mon Nov 03 1980 11:17:35 GMT+0000 (UTC)",
        "enddate": "Wed Jun 30 2004 12:01:03 GMT+0000 (UTC)",
        "jobdesc": "duis anim quis eu esse laboris enim esse dolor est incididunt reprehenderit non sit veniam"
      },
      {
        "company": "PRIMORDIA",
        "companylocation": "Corinne",
        "startdate": "Fri Nov 20 1987 14:01:23 GMT+0000 (UTC)",
        "enddate": "Sat Feb 08 1975 19:34:50 GMT+0000 (UTC)",
        "jobdesc": "qui do excepteur ullamco exercitation Lorem cillum aute tempor commodo minim mollit et tempor pariatur"
      },
      {
        "company": "MICRONAUT",
        "companylocation": "Fairmount",
        "startdate": "Fri Nov 04 2005 22:17:00 GMT+0000 (UTC)",
        "enddate": "Sat Jun 22 1985 15:08:20 GMT+0000 (UTC)",
        "jobdesc": "irure elit occaecat quis occaecat ullamco laborum magna veniam sint duis commodo et ut cupidatat"
      }
    ],
    "certification": [
      {
        "title": "laborum nulla",
        "startdate": "Sat May 01 1976 17:13:58 GMT+0000 (UTC)",
        "enddate": "Fri Jul 24 2015 13:04:07 GMT+0000 (UTC)",
        "picture": "http://placehold.it/32x32"
      },
      {
        "title": "reprehenderit magna",
        "startdate": "Mon May 16 2011 05:49:03 GMT+0000 (UTC)",
        "enddate": "Sat Dec 31 2016 11:44:06 GMT+0000 (UTC)",
        "picture": "http://placehold.it/32x32"
      }
    ],
    "skill": [
      {
        "skilltype": "enim cillum",
        "power": 0
      },
      {
        "skilltype": "in fugiat",
        "power": 7
      },
      {
        "skilltype": "sint excepteur",
        "power": 10
      },
      {
        "skilltype": "consectetur sint",
        "power": 2
      }
    ]
  },
  {
    "_id": "5945c5fda78bc344bb9f3621",
    "index": 6,
    "email": "jondoe@company.com",
    "personalinfo": {
      "firstname": "Merritt",
      "lastname": "Marsh",
      "date": "Thu May 10 1979 13:17:17 GMT+0000 (UTC)",
      "countryofbirth": "Belarus",
      "maritalstatus": "married",
      "language": "english"
    },
    "experience": [
      {
        "company": "SENMEI",
        "companylocation": "Cochranville",
        "startdate": "Fri Aug 22 1980 16:20:25 GMT+0000 (UTC)",
        "enddate": "Fri May 20 2011 13:16:24 GMT+0000 (UTC)",
        "jobdesc": "elit nisi amet nisi dolore id magna aute anim laborum ipsum fugiat labore consectetur cupidatat"
      },
      {
        "company": "ISOTERNIA",
        "companylocation": "Websterville",
        "startdate": "Sat Jun 26 2004 10:31:09 GMT+0000 (UTC)",
        "enddate": "Mon Jun 09 2008 18:43:26 GMT+0000 (UTC)",
        "jobdesc": "Lorem in ut ad cillum fugiat cillum exercitation sint quis exercitation elit sit eiusmod irure"
      },
      {
        "company": "TALKOLA",
        "companylocation": "Richford",
        "startdate": "Sat Sep 18 2004 23:31:09 GMT+0000 (UTC)",
        "enddate": "Wed May 26 1976 05:20:22 GMT+0000 (UTC)",
        "jobdesc": "sunt laborum sit magna laborum Lorem commodo quis quis ipsum sit id nostrud ipsum eu"
      }
    ],
    "certification": [
      {
        "title": "amet ea",
        "startdate": "Sat Oct 04 1997 18:17:25 GMT+0000 (UTC)",
        "enddate": "Thu Jan 12 1989 12:32:20 GMT+0000 (UTC)",
        "picture": "http://placehold.it/32x32"
      },
      {
        "title": "minim aute",
        "startdate": "Sun Feb 09 2003 05:16:08 GMT+0000 (UTC)",
        "enddate": "Sun Dec 15 1991 02:31:54 GMT+0000 (UTC)",
        "picture": "http://placehold.it/32x32"
      }
    ],
    "skill": [
      {
        "skilltype": "sunt laborum",
        "power": 1
      },
      {
        "skilltype": "do incididunt",
        "power": 3
      },
      {
        "skilltype": "adipisicing nisi",
        "power": 1
      },
      {
        "skilltype": "elit exercitation",
        "power": 6
      }
    ]
  },
  {
    "_id": "5945c5fd0227bb3e4988654c",
    "index": 7,
    "email": "jondoe1@company.com",
    "personalinfo": {
      "firstname": "Mckinney",
      "lastname": "Fry",
      "date": "Sun Nov 21 1982 12:10:43 GMT+0000 (UTC)",
      "countryofbirth": "Anguilla",
      "maritalstatus": "married",
      "language": "arabic"
    },
    "experience": [
      {
        "company": "NEXGENE",
        "companylocation": "Rote",
        "startdate": "Thu Jan 30 1986 21:26:35 GMT+0000 (UTC)",
        "enddate": "Mon May 14 2007 05:40:35 GMT+0000 (UTC)",
        "jobdesc": "nulla qui proident exercitation ad ullamco reprehenderit quis magna non et non id laborum ex"
      },
      {
        "company": "SENSATE",
        "companylocation": "Allentown",
        "startdate": "Wed Feb 10 1993 04:31:02 GMT+0000 (UTC)",
        "enddate": "Tue Dec 30 2014 13:48:09 GMT+0000 (UTC)",
        "jobdesc": "nulla commodo aute enim ullamco mollit aute irure et quis aliquip cupidatat minim sunt quis"
      },
      {
        "company": "COMBOT",
        "companylocation": "Campo",
        "startdate": "Sun Dec 31 1972 06:26:48 GMT+0000 (UTC)",
        "enddate": "Wed Oct 09 1996 12:51:37 GMT+0000 (UTC)",
        "jobdesc": "labore aute nostrud ex eu eu mollit mollit ad eiusmod magna consequat est magna mollit"
      }
    ],
    "certification": [
      {
        "title": "sit anim",
        "startdate": "Sat Jun 05 2004 18:59:37 GMT+0000 (UTC)",
        "enddate": "Tue Jun 22 1971 10:43:02 GMT+0000 (UTC)",
        "picture": "http://placehold.it/32x32"
      },
      {
        "title": "id nulla",
        "startdate": "Wed Jun 16 1993 06:51:55 GMT+0000 (UTC)",
        "enddate": "Sat May 22 1971 11:43:29 GMT+0000 (UTC)",
        "picture": "http://placehold.it/32x32"
      }
    ],
    "skill": [
      {
        "skilltype": "qui adipisicing",
        "power": 5
      },
      {
        "skilltype": "ex officia",
        "power": 7
      },
      {
        "skilltype": "minim aute",
        "power": 4
      },
      {
        "skilltype": "aliquip nisi",
        "power": 10
      }
    ]
  }
];

export default class RefugeeAPISimulator {
    constructor(){}

    static getRefugeeAsync () {
        return new Promise((resolve, reject) => {
            // We call resolve(...) when what we were doing made async successful, and reject(...) when it failed.
            // In this example, we use setTimeout(...) to simulate async code.
            // In reality, you will probably be using something like XHR or an HTML5 API.
            setTimeout(function(){
                let response = { data: [...refugee] };
                resolve(response); // Yay! Everything went well!
            }, 250);
        });

    };


    static getMovieByIdAsync (id) {
        return new Promise((resolve, reject) => {
            // We call resolve(...) when what we were doing made async successful, and reject(...) when it failed.
            // In this example, we use setTimeout(...) to simulate async code.
            // In reality, you will probably be using something like XHR or an HTML5 API.
            setTimeout(function(){

                let refugee = {};
                let refugeeIndex = refugee.map(refugee => refugee['_id']).indexOf(id);
                if (refugeeIndex > -1) refugee = refugee[refugeeIndex];

                let response = { data: Object.assign({},refugee)};
                resolve(response); // Yay! Everything went well!
            }, 250);
        });

    };

    static createMovie (refugee) {
        return new Promise((resolve, reject) => {
            // We call resolve(...) when what we were doing made async successful, and reject(...) when it failed.
            // In this example, we use setTimeout(...) to simulate async code.
            // In reality, you will probably be using something like XHR or an HTML5 API.
            setTimeout(function(){

                let _refugee  = Object.assign({},refugee, {'_id': ObjectId()});
                refugee.push(_refugee);

                let response = { data: _refugee };
                resolve(response); // Yay! Everything went well!
            }, 250);
        });


    };

    static deleteMovie (id) {
        return new Promise((resolve, reject) => {
            // We call resolve(...) when what we were doing made async successful, and reject(...) when it failed.
            // In this example, we use setTimeout(...) to simulate async code.
            // In reality, you will probably be using something like XHR or an HTML5 API.
            setTimeout(function(){

                let refugeeIndex = refugee.map(refugee => refugee['_id']).indexOf(id);
                refugee.splice(refugeeIndex,1); //Mutation


                let response = { status: 200 };
                resolve(response); // Yay! Everything went well!
            }, 250);
        });

    };

    static updateMovie (refugee) {
        return new Promise((resolve, reject) => {
            // We call resolve(...) when what we were doing made async successful, and reject(...) when it failed.
            // In this example, we use setTimeout(...) to simulate async code.
            // In reality, you will probably be using something like XHR or an HTML5 API.
            setTimeout(function(){

                let refugeeIndex = refugee.map(_refugee => _refugee['_id']).indexOf(refugee['_id']);
                refugee[refugeeIndex] =  Object.assign({},refugee[refugeeIndex], refugee);

                let response = { data: refugee[refugeeIndex] };
                resolve(response); // Yay! Everything went well!
            }, 250);
        });

    };


}



