/* acces.js — fabriqué par outils/chiffrer.py (site v64 ; v65 : clé collègue), ne pas modifier.
   Identifiants et témoins des clés, enveloppes de secours (mot de passe de la classe)
   et du code enseignant. Aucun mot de passe, aucune clé en clair. */
window.ACCES2 = {
 "catalogue": {
  "1sti2d": "catalogue/1sti2d.enc",
  "bts-crsa": "catalogue/bts-crsa.enc",
  "bts-et": "catalogue/bts-et.enc",
  "bts-tsma": "catalogue/bts-tsma.enc",
  "commune": "catalogue/commune.enc"
 },
 "cles": {
  "1sti2d": {
   "id": "AOGrHFXr",
   "iv": "5q11/+rHpwtF1LDb",
   "temoin": "3UJMoIbKau6VyWYnWE5/8KRw89wM4kpB9PqPf+Y/kA=="
  },
  "bts-crsa": {
   "id": "XamrnAy2",
   "iv": "V3Dhs+AXC2PhJF3b",
   "temoin": "FMhGWcLf4zrJJM+3cUiTBU7k+TgcbQ8LnFOqhhg7ROFb"
  },
  "bts-et": {
   "id": "vYzAV6SL",
   "iv": "xc9HjujJ9eJTtwmk",
   "temoin": "dj7i1SdkMGipN4EPNnn+Yo0qvf7J0cPuTTKPCghTcA=="
  },
  "bts-tsma": {
   "id": "r3x7_Dkf",
   "iv": "VqW6+goa51OrZK6W",
   "temoin": "T5ZEEUVCqIbIXaFB9fCUGyUwiQhcTE6l9sJAqfEcgw+6"
  },
  "collegue": {
   "id": "0fb1730057bf",
   "iv": "zZa5QUZVrtY69vzF",
   "temoin": "GjuKYhmvk8qIJwDydGOk7DeRabJxJB27zmmv7tRf8rhh"
  },
  "commune": {
   "id": "U83bRxsj",
   "iv": "C33o8lJLIknm1rGj",
   "temoin": "pKocCeJl4VQx8BdonBx1ChVJPN8hkuqZ999HvC5ajRM="
  },
  "prive": {
   "id": "inconnu",
   "iv": "2Es7Kiz9hk0J3IOY",
   "temoin": "wJNHy4WObG+oGfsGnGZMXmn04xul2dUmDBeNlnge"
  }
 },
 "secours": {
  "cles": {
   "1sti2d": {
    "env": {
     "cle": "UcbgdcbFXL/wgMugTa5MVNgdhiOYGMY2Sop7IkHzFu5q5j/upZAxeuGMKRexs5Hs",
     "iv": "fB6UO4Nbeycz84yS"
    },
    "envc": {
     "cle": "HHgX+n+NElpKXuJvuKKO34BpK0u5kg8VfLFj4jieIgx+cQOq2tAEgLUmpEc+E0le",
     "iv": "Y1fbt0DYCP/vWDBE"
    }
   },
   "bts-crsa": {
    "env": {
     "cle": "d0v7jHSW7XfE4qR/A8DbHpnj2aAYj03nvV1si65oDISM1yck0AObuz9/aL7gv7rt",
     "iv": "kehKhnAMRCBFKzwy"
    },
    "envc": {
     "cle": "JvKM0dJBdDYxJGku2ThYboz0nEu7AyYwCsCAaK06Q3fwpCyWRIfXta+EkeTqKzg2",
     "iv": "gSAm3lJlwxu1YeDo"
    }
   },
   "bts-et": {
    "env": {
     "cle": "/kxt2LsRDYq+Z6dRjnZzcjydiwgNktVJTO7SfEk8sAX8s8pSnF1qpCo/0wbSRDSn",
     "iv": "2mQwWnfATMHbcvkg"
    },
    "envc": {
     "cle": "5H91m9pMa5V7w8nK/4hnBUXcvmZx9OkAmPzadU0Rrtm3w+osJP5RZKwl9ahiRsSE",
     "iv": "1Z13LuM/LmmKJHOO"
    }
   },
   "bts-tsma": {
    "env": {
     "cle": "BFNHHk0NwlOeRoimGpHUXSnPo1HNmnXUpakHR9CZhA7nRFxdZnl3s0ahj7IJOpfq",
     "iv": "L2XPAmAAq4PBdFVy"
    },
    "envc": {
     "cle": "GWAjl03EVpN460/vs1h5I7k5bWaBQsQiCY+6L4GJuMcKpGAKtc1VFFWFTSrX68ya",
     "iv": "wwsoEZCNfy5L6W4x"
    }
   }
  },
  "sel": "l64BpNusLhDMiVaiEK/1kg==",
  "tours": 300000
 },
 "version": 2
};
window.ACCES_PROF = {
 "cles": {
  "1sti2d": {
   "cle": "8Pls7NcBDTud0hPBYRkFOTuq1s3GYw646N4Gm2YNpe96kjAKz6YB/Qilh3WWuXjV",
   "iv": "3zi54zXmCXtEcUWH"
  },
  "bts-crsa": {
   "cle": "muwioJ3Uj6Vovpir6EJPp4HxNL3SxvPbdCU+HkxraXTbNSYOctZl6QLqlowBQ9mu",
   "iv": "lLkusHHepz1gVUhp"
  },
  "bts-et": {
   "cle": "Dhc56I/5A9KfMGiRdZNpC1WKzNm5YQ/p6v59l69mokyVcQEXQ9es8hOnBSgAtYaH",
   "iv": "SDKMgbA2hTrgEShs"
  },
  "bts-tsma": {
   "cle": "HG62rXN1mCgIpG25wEghYl0XKga1fImQ3sA/nSffO52jal7KrWlbSLqUMOkGvvyf",
   "iv": "1wNZEDEGw0DdkXle"
  }
 },
 "collegue": {
  "cle": "g5RvB3XFnNGl2dAx/oh9NLsbMv1Xnae821Mt9V+tRQNoegYWgQxYaQhE0CBDYGRr",
  "iv": "58alHRGqrU4laGPi"
 },
 "commune": {
  "cle": "x2lzufzTlq3R+QKfv/TOgLmyOc6/Jb6S0mejEywTGVdfWaqTbH8Vt69CbUQQn/pQ",
  "iv": "PKdoyH/YeUoPj7JT"
 },
 "iv": "eH5smSYXbVONiD51",
 "prive": {
  "cle": "JBBImdiVWfCreK2DMTWZXEvm/ZjsnCQdHFvwJkD3Okm/vDMmiqEgD7+j4gKhVc7e",
  "iv": "tZDeKUmQ6on+EyAg"
 },
 "sel": "7s0VJmdp8AqQ7unAVLZWjg==",
 "temoin": "naoGLJD8NVyJ5nL+1G+35pdBz1P4Ot5U8R708hs=",
 "tours": 300000
};
