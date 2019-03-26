//	HYPE.documents["puzzle"]

(function() {
  (function k() {
    var f = "puzzle.hyperesources",
      d = "puzzle",
      c = "puzzle_hype_container";
    if (false == !1)
      try {
        for (
          var g = document.getElementsByTagName("script"), a = 0;
          a < g.length;
          a++
        ) {
          var b = g[a].src;
          if (null != b && -1 != b.indexOf("puzzle_hype_generated_script.js")) {
            f = b.substr(0, b.lastIndexOf("/"));
            break;
          }
        }
      } catch (m) {}
    if (false == !1 && null == window.HYPE_466)
      null == window.HYPE_dtl_466
        ? ((window.HYPE_dtl_466 = []),
          window.HYPE_dtl_466.push(k),
          (d = document.getElementsByTagName("head")[0]),
          (c = document.createElement("script")),
          (a = navigator.userAgent.match(/MSIE (\d+\.\d+)/)),
          (a = parseFloat(a && a[1]) || null),
          (c.type = "text/javascript"),
          (c.src =
            f +
            "/" +
            (!0 == ((null != a && 10 > a) || false == !0)
              ? "HYPE-466.full.min.js"
              : "HYPE-466.thin.min.js")),
          d.appendChild(c))
        : window.HYPE_dtl_466.push(k);
    else {
      window.HYPE_dtl_466 = [];
      g = window.HYPE.documents;
      if (null != g[d]) {
        b = 1;
        a = d;
        do d = "" + a + "-" + b++;
        while (null != g[d]);
        for (
          var e = document.getElementsByTagName("div"), b = !1, a = 0;
          a < e.length;
          a++
        )
          if (e[a].id == c && null == e[a].getAttribute("HYP_dn")) {
            var b = 1,
              h = c;
            do c = "" + h + "-" + b++;
            while (null != document.getElementById(c));
            e[a].id = c;
            b = !0;
            break;
          }
        if (!1 == b) return;
      }
      b = [];
      b = [
        {
          name: "toolFunction",
          source:
            "function(hypeDocument, element, event) {\t\n\tJQuery('.show-fadein .slider-content').hide().removeClass('uk-active');\n\tJQuery('.tools-service').fadeIn('slow').addClass('uk-active');\n\t\n}",
          identifier: "420"
        },
        {
          name: "mindsetFunction",
          source:
            "function(hypeDocument, element, event) {\t\n\tJQuery('.show-fadein .slider-content').hide().removeClass('uk-active');\n\tJQuery('.mindset-service').fadeIn('slow').addClass('uk-active');\n\t\n}",
          identifier: "421"
        },
        {
          name: "experienceFunction",
          source:
            "function(hypeDocument, element, event) {\t\n\tJQuery('.show-fadein .slider-content').hide().removeClass('uk-active');\n\tJQuery('.experience-service').fadeIn('slow').addClass('uk-active');\n\t\n}",
          identifier: "602"
        },
        {
          name: "passionFunction",
          source:
            "function(hypeDocument, element, event) {\t\n\tJQuery('.show-fadein .slider-content').hide().removeClass('uk-active');\n\tJQuery('.passion-service').fadeIn('slow').addClass('uk-active');\n\t\n}",
          identifier: "603"
        },
        {
          name: "skillsFunction",
          source:
            "function(hypeDocument, element, event) {\n\tJQuery('.show-fadein .slider-content').hide().removeClass('uk-active');\n\tJQuery('.skills-service').fadeIn('slow').addClass('uk-active');\n\t\n}",
          identifier: "604"
        }
      ];
      e = {};
      h = {};
      for (a = 0; a < b.length; a++)
        try {
          (h[b[a].identifier] = b[a].name),
            (e[b[a].name] = eval(
              "(function(){return " + b[a].source + "})();"
            ));
        } catch (l) {
          window.console && window.console.log(l),
            (e[b[a].name] = function() {});
        }
      f = new HYPE_466(
        d,
        c,
        {
          "18": {
            p: 1,
            n: "ion-android-favorite-outline%20-%20Ionicons%402x.png",
            g: "283",
            o: true,
            t: "@2x"
          },
          "10": { p: 1, n: "Fill%203_c.svg", g: "528", t: "image/svg+xml" },
          "19": {
            p: 1,
            n: "star-o%20-%20anticon.png",
            g: "285",
            o: true,
            t: "@1x"
          },
          "11": { p: 1, n: "Fill%201_c.svg", g: "551", t: "image/svg+xml" },
          "0": { p: 1, n: "Fill%2011.svg", g: "6", t: "image/svg+xml" },
          "12": { p: 1, n: "Fill%209_c.svg", g: "575", t: "image/svg+xml" },
          "1": { p: 1, n: "Fill%207.svg", g: "8", t: "image/svg+xml" },
          "20": {
            p: 1,
            n: "star-o%20-%20anticon%402x.png",
            g: "285",
            o: true,
            t: "@2x"
          },
          "2": { p: 1, n: "Fill%205.svg", g: "10", t: "image/svg+xml" },
          "13": {
            p: 1,
            n: "tool%20-%20anticon.png",
            g: "279",
            o: true,
            t: "@1x"
          },
          "3": { p: 1, n: "Fill%203.svg", g: "12", t: "image/svg+xml" },
          "21": {
            p: 1,
            n: "bulb%20-%20anticon.png",
            g: "287",
            o: true,
            t: "@1x"
          },
          "14": {
            p: 1,
            n: "tool%20-%20anticon%402x.png",
            g: "279",
            o: true,
            t: "@2x"
          },
          "4": { p: 1, n: "Fill%201.svg", g: "14", t: "image/svg+xml" },
          "5": { p: 1, n: "Fill%209.svg", g: "16", t: "image/svg+xml" },
          "15": {
            p: 1,
            n: "setting%20-%20anticon.png",
            g: "257",
            o: true,
            t: "@1x"
          },
          "22": {
            p: 1,
            n: "bulb%20-%20anticon%402x.png",
            g: "287",
            o: true,
            t: "@2x"
          },
          "6": { p: 1, n: "Logo_default.svg", g: "91", t: "image/svg+xml" },
          "16": {
            p: 1,
            n: "setting%20-%20anticon%402x.png",
            g: "257",
            o: true,
            t: "@2x"
          },
          "7": { p: 1, n: "Logo_white.svg", g: "169", t: "image/svg+xml" },
          "8": { p: 1, n: "Fill%207_c.svg", g: "303", t: "image/svg+xml" },
          "17": {
            p: 1,
            n: "ion-android-favorite-outline%20-%20Ionicons.png",
            g: "283",
            o: true,
            t: "@1x"
          },
          "9": { p: 1, n: "Fill%205_c.svg", g: "390", t: "image/svg+xml" }
        },
        f,
        [
          "<link href='https://fonts.googleapis.com/css?family=Barlow&subset=latin' rel='stylesheet' type='text/css'>"
        ],
        e,
        [
          { n: "4", o: "94", X: [0] },
          { n: "skills_slide", o: "468", X: [1] },
          { n: "passion_slide", o: "393", X: [2] },
          { n: "experience_slide", o: "509", X: [3] },
          { n: "mindset_slide", o: "531", X: [4] },
          { n: "tool_slide", o: "554", X: [5] }
        ],
        [
          {
            o: "109",
            p: "600px",
            x: 0,
            cA: false,
            Z: 490,
            Y: 490,
            c: "#FFFFFF",
            L: [],
            bY: 1,
            d: 490,
            U: {},
            T: {
              kTimelineDefaultIdentifier: {
                i: "kTimelineDefaultIdentifier",
                n: "Main Timeline",
                z: 3,
                b: [],
                a: [
                  { f: "c", y: 0, z: 1, i: "a", e: 114, s: 125, o: "611" },
                  { f: "c", y: 0, z: 1, i: "b", e: 0, s: -71, o: "611" },
                  { f: "c", y: 0, z: 1, i: "e", e: 1, s: 0, o: "611" },
                  { f: "c", y: 0.06, z: 1, i: "b", e: 17, s: -18, o: "618" },
                  { f: "c", y: 0.06, z: 1, i: "a", e: 0, s: -78, o: "618" },
                  { f: "c", y: 0.06, z: 0.24, i: "e", e: 1, s: 0, o: "618" },
                  { f: "c", y: 0.12, z: 1, i: "b", e: 173, s: 239, o: "607" },
                  { f: "c", y: 0.12, z: 1, i: "a", e: 1, s: -61, o: "607" },
                  { f: "c", y: 0.12, z: 1, i: "e", e: 1, s: 0, o: "607" },
                  { f: "c", y: 0.19, z: 1, i: "b", e: 240, s: 301, o: "616" },
                  { f: "c", y: 0.19, z: 1, i: "a", e: 130, s: 154, o: "616" },
                  { f: "c", y: 0.19, z: 1, i: "e", e: 1, s: 0, o: "616" },
                  { f: "c", y: 1, z: 1, i: "a", e: 259, s: 316, o: "614" },
                  { f: "c", y: 1, z: 1, i: "e", e: 1, s: 0, o: "614" },
                  { y: 1, i: "b", s: 0, z: 0, o: "611", f: "c" },
                  { f: "c", y: 1, z: 1, i: "a", e: 508, s: 565, o: "622" },
                  { f: "c", y: 1, z: 1, i: "e", e: 1, s: 0, o: "622" },
                  { f: "c", y: 1, z: 1, i: "e", e: 1, s: 0, o: "610" },
                  { y: 1, i: "a", s: 114, z: 0, o: "611", f: "c" },
                  { f: "c", y: 1, z: 1, i: "e", e: 1, s: 0, o: "613" },
                  { f: "c", y: 1, z: 1, i: "e", e: 1, s: 0, o: "609" },
                  { y: 1, i: "e", s: 1, z: 0, o: "611", f: "c" },
                  { y: 1, i: "e", s: 1, z: 0, o: "618", f: "c" },
                  { y: 1.06, i: "b", s: 17, z: 0, o: "618", f: "c" },
                  { y: 1.06, i: "a", s: 0, z: 0, o: "618", f: "c" },
                  { y: 1.12, i: "b", s: 173, z: 0, o: "607", f: "c" },
                  { y: 1.12, i: "a", s: 1, z: 0, o: "607", f: "c" },
                  { y: 1.12, i: "e", s: 1, z: 0, o: "607", f: "c" },
                  { f: "c", y: 1.15, z: 1, i: "e", e: 1, s: 0, o: "615" },
                  { y: 1.19, i: "b", s: 240, z: 0, o: "616", f: "c" },
                  { y: 1.19, i: "a", s: 130, z: 0, o: "616", f: "c" },
                  { y: 1.19, i: "e", s: 1, z: 0, o: "616", f: "c" },
                  { y: 2, i: "a", s: 259, z: 0, o: "614", f: "c" },
                  { y: 2, i: "a", s: 508, z: 0, o: "622", f: "c" },
                  { y: 2, i: "e", s: 1, z: 0, o: "614", f: "c" },
                  { y: 2, i: "e", s: 1, z: 0, o: "622", f: "c" },
                  { f: "c", y: 2, z: 1, i: "e", e: 1, s: 0, o: "608" },
                  { y: 2, i: "e", s: 1, z: 0, o: "610", f: "c" },
                  { y: 2, i: "e", s: 1, z: 0, o: "613", f: "c" },
                  { y: 2, i: "e", s: 1, z: 0, o: "609", f: "c" },
                  { y: 2.15, i: "e", s: 1, z: 0, o: "615", f: "c" },
                  { y: 3, i: "e", s: 1, z: 0, o: "608", f: "c" }
                ],
                f: 30
              }
            },
            bZ: 180,
            O: [
              "620",
              "621",
              "619",
              "615",
              "609",
              "610",
              "613",
              "608",
              "612",
              "617",
              "611",
              "618",
              "607",
              "616",
              "614",
              "606",
              "622",
              "605"
            ],
            v: {
              "616": {
                h: "10",
                p: "no-repeat",
                x: "visible",
                a: 154,
                q: "100% 100%",
                b: 301,
                j: "absolute",
                bF: "606",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "393" },
                    { p: 4, h: "603" }
                  ]
                },
                k: "div",
                z: 2,
                d: 142,
                c: 222,
                r: "inline",
                e: 0,
                aP: "pointer"
              },
              "605": {
                w: "",
                h: "6",
                p: "no-repeat",
                x: "visible",
                a: 332,
                q: "100% 100%",
                b: 268,
                j: "absolute",
                r: "none",
                z: 1,
                k: "div",
                c: 224,
                d: 229,
                t: 20,
                f: 0
              },
              "611": {
                h: "16",
                p: "no-repeat",
                x: "visible",
                a: 125,
                q: "100% 100%",
                b: -71,
                j: "absolute",
                bF: "606",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "554" },
                    { p: 4, h: "420" }
                  ]
                },
                k: "div",
                z: 5,
                d: 130,
                c: 216,
                r: "inline",
                e: 0,
                aP: "pointer"
              },
              "622": {
                w: "",
                h: "8",
                p: "no-repeat",
                x: "visible",
                a: 565,
                q: "100% 100%",
                b: 262,
                j: "absolute",
                r: "none",
                aA: { a: [{ p: 0 }] },
                z: 5,
                k: "div",
                d: 225,
                c: 120,
                t: 15,
                e: 0,
                aP: "pointer"
              },
              "619": {
                aV: 8,
                w:
                  '<p style="margin-top: 0px; margin-bottom: 10px; font-style: normal; font-variant-caps: normal; font-size: 24px; line-height: normal; font-family: Barlow; color: rgb(75, 75, 75);"><b>Skills</b></p>',
                a: 830,
                x: "visible",
                Z: "break-word",
                b: 386,
                y: "preserve",
                j: "absolute",
                z: 16,
                yy: "nowrap",
                s: "Helvetica,Arial,Sans-Serif",
                aT: 8,
                k: "div",
                aS: 8,
                e: 1,
                t: 16,
                G: "#000000",
                aU: 8,
                r: "none"
              },
              "608": {
                h: "257",
                p: "no-repeat",
                x: "visible",
                a: 324,
                q: "100% 100%",
                b: 163,
                j: "absolute",
                bF: "606",
                z: 8,
                k: "div",
                c: 32,
                d: 33,
                r: "inline",
                e: 0
              },
              "614": {
                bJ: 1,
                p: "no-repeat",
                c: 120,
                q: "100% 100%",
                d: 225,
                r: "inline",
                e: 0,
                bL: 0,
                aW: 0,
                t: 15,
                aX: 0,
                aP: "default",
                h: "303",
                w: "",
                bF: "606",
                aA: { a: [{ p: 0 }] },
                x: "visible",
                j: "absolute",
                k: "div",
                Q: 0,
                z: 1,
                R: "#000000",
                S: 0,
                a: 316,
                T: 0,
                b: 67
              },
              "620": {
                h: "91",
                p: "no-repeat",
                x: "visible",
                a: 397,
                q: "100% 100%",
                b: 350,
                j: "absolute",
                r: "none",
                c: 94,
                k: "div",
                z: 18,
                d: 75
              },
              "617": {
                c: 154,
                d: 154,
                I: "None",
                r: "inline",
                J: "None",
                K: "None",
                g: "#FFB000",
                L: "None",
                M: 0,
                N: 0,
                aI: "50%",
                A: "#D8DDE4",
                x: "visible",
                j: "absolute",
                O: 0,
                aJ: "50%",
                k: "div",
                C: "#D8DDE4",
                z: 6,
                B: "#D8DDE4",
                D: "#D8DDE4",
                aK: "50%",
                bF: "606",
                P: 0,
                a: 112,
                aL: "50%",
                b: 114
              },
              "606": {
                k: "div",
                x: "visible",
                c: 379,
                d: 382,
                z: 6,
                a: 55,
                j: "absolute",
                bS: 45,
                b: 54
              },
              "612": {
                h: "169",
                p: "no-repeat",
                x: "visible",
                a: 147,
                q: "100% 100%",
                b: 157,
                j: "absolute",
                bF: "606",
                z: 7,
                k: "div",
                c: 94,
                d: 75,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "609": {
                h: "285",
                p: "no-repeat",
                x: "visible",
                a: 57,
                q: "100% 100%",
                b: 261,
                j: "absolute",
                bF: "606",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "509" },
                    { p: 4, h: "602" }
                  ]
                },
                k: "div",
                z: 11,
                d: 33,
                c: 32,
                r: "inline",
                e: 0,
                aP: "pointer"
              },
              "615": {
                h: "287",
                p: "no-repeat",
                x: "visible",
                a: 49,
                q: "100% 100%",
                b: 87,
                j: "absolute",
                bF: "606",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "531" },
                    { p: 4, h: "421" }
                  ]
                },
                k: "div",
                z: 12,
                d: 37,
                c: 28,
                r: "inline",
                e: 0,
                aP: "pointer"
              },
              "610": {
                h: "283",
                p: "no-repeat",
                x: "visible",
                a: 230,
                q: "100% 100%",
                b: 314,
                j: "absolute",
                bF: "606",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "393" },
                    { p: 4, h: "603" }
                  ]
                },
                k: "div",
                z: 10,
                d: 33,
                c: 33,
                r: "inline",
                e: 0,
                aP: "pointer"
              },
              "621": {
                G: "#000000",
                aU: 8,
                c: 411,
                aV: 8,
                d: 114,
                r: "none",
                e: 1,
                s: "Helvetica,Arial,Sans-Serif",
                t: 16,
                Z: "break-word",
                w:
                  '<p style="margin-top: 0px; margin-bottom: 10px; font-style: normal; font-variant-caps: normal; font-size: 18px; line-height: normal; font-family: Barlow; color: rgb(75, 75, 75);">It goes without saying, we bring together the full digital and marketing stack necessary for success; marketing strategy, SEO, digital advertising, social media, email, automation, content production, design, web, and app development.</p>',
                j: "absolute",
                x: "visible",
                k: "div",
                y: "preserve",
                z: 17,
                aS: 8,
                aT: 8,
                a: 830,
                b: 422
              },
              "618": {
                h: "14",
                p: "no-repeat",
                x: "visible",
                a: -78,
                q: "100% 100%",
                b: -18,
                j: "absolute",
                bF: "606",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "531" },
                    { p: 4, h: "421" }
                  ]
                },
                k: "div",
                z: 4,
                d: 191,
                c: 163,
                r: "inline",
                e: 0,
                aP: "pointer"
              },
              "607": {
                w: "",
                h: "12",
                p: "no-repeat",
                x: "visible",
                a: -61,
                q: "100% 100%",
                b: 239,
                j: "absolute",
                bF: "606",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "509" },
                    { p: 4, h: "602" }
                  ]
                },
                z: 3,
                k: "div",
                d: 204,
                c: 168,
                r: "inline",
                e: 0,
                aP: "pointer"
              },
              "613": {
                h: "279",
                p: "no-repeat",
                x: "visible",
                a: 203,
                q: "100% 100%",
                b: 22,
                j: "absolute",
                bF: "606",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "554" },
                    { p: 4, h: "420" }
                  ]
                },
                k: "div",
                z: 9,
                d: 39,
                c: 38,
                r: "inline",
                e: 0,
                aP: "pointer"
              }
            }
          },
          {
            o: "486",
            p: "600px",
            x: 1,
            cA: false,
            Z: 490,
            Y: 490,
            c: "#FFFFFF",
            L: [],
            bY: 1,
            d: 490,
            U: {},
            T: {
              kTimelineDefaultIdentifier: {
                i: "kTimelineDefaultIdentifier",
                n: "Main Timeline",
                z: 0.15,
                b: [],
                a: [
                  { f: "c", y: 0, z: 0.15, i: "e", e: 0, s: 1, o: "635" },
                  { f: "c", y: 0, z: 0.06, i: "e", e: 1, s: 0, o: "632" },
                  { y: 0.06, i: "e", s: 1, z: 0, o: "632", f: "c" },
                  { y: 0.15, i: "e", s: 0, z: 0, o: "635", f: "c" }
                ],
                f: 30
              }
            },
            bZ: 180,
            O: [
              "639",
              "628",
              "633",
              "638",
              "630",
              "634",
              "631",
              "637",
              "629",
              "626",
              "636",
              "627",
              "635",
              "632",
              "625",
              "623",
              "624"
            ],
            v: {
              "627": {
                h: "390",
                p: "no-repeat",
                x: "visible",
                a: 131,
                q: "100% 100%",
                b: 241,
                j: "absolute",
                bF: "625",
                aA: { a: [{ p: 0 }] },
                z: 3,
                k: "div",
                d: 141,
                c: 220,
                r: "inline",
                e: 0,
                aP: "pointer",
                f: 0
              },
              "633": {
                h: "283",
                p: "no-repeat",
                x: "visible",
                a: 230,
                q: "100% 100%",
                b: 314,
                j: "absolute",
                bF: "625",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "393" },
                    { p: 4, h: "603" }
                  ]
                },
                k: "div",
                z: 12,
                d: 33,
                c: 33,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "636": {
                w: "",
                h: "10",
                p: "no-repeat",
                x: "visible",
                a: 130,
                q: "100% 100%",
                b: 240,
                j: "absolute",
                bF: "625",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "393" },
                    { p: 4, h: "603" }
                  ]
                },
                z: 4,
                k: "div",
                d: 142,
                c: 222,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "625": {
                k: "div",
                x: "visible",
                c: 380,
                d: 382,
                z: 16,
                a: 55,
                j: "absolute",
                b: 54
              },
              "631": {
                c: 154,
                d: 154,
                I: "None",
                r: "inline",
                J: "None",
                K: "None",
                g: "#FFB000",
                L: "None",
                M: 0,
                N: 0,
                aI: "50%",
                A: "#D8DDE4",
                x: "visible",
                j: "absolute",
                O: 0,
                aJ: "50%",
                k: "div",
                C: "#D8DDE4",
                z: 8,
                B: "#D8DDE4",
                D: "#D8DDE4",
                aK: "50%",
                bF: "625",
                P: 0,
                a: 112,
                aL: "50%",
                b: 114
              },
              "639": {
                h: "287",
                p: "no-repeat",
                x: "visible",
                a: 49,
                q: "100% 100%",
                b: 87,
                j: "absolute",
                bF: "625",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "531" },
                    { p: 4, h: "421" }
                  ]
                },
                k: "div",
                z: 14,
                d: 37,
                c: 28,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "628": {
                h: "285",
                p: "no-repeat",
                x: "visible",
                a: 57,
                q: "100% 100%",
                b: 261,
                j: "absolute",
                bF: "625",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "509" },
                    { p: 4, h: "602" }
                  ]
                },
                k: "div",
                z: 13,
                d: 33,
                c: 32,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "634": {
                h: "169",
                p: "no-repeat",
                x: "visible",
                a: 147,
                q: "100% 100%",
                b: 157,
                j: "absolute",
                bF: "625",
                z: 9,
                k: "div",
                c: 94,
                d: 75,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "623": {
                h: "91",
                p: "no-repeat",
                x: "visible",
                a: 397,
                q: "100% 100%",
                b: 350,
                j: "absolute",
                r: "none",
                c: 94,
                k: "div",
                z: 15,
                d: 75
              },
              "637": {
                h: "16",
                p: "no-repeat",
                x: "visible",
                a: 114,
                q: "100% 100%",
                b: 0,
                j: "absolute",
                bF: "625",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "554" },
                    { p: 4, h: "420" }
                  ]
                },
                k: "div",
                z: 7,
                d: 130,
                c: 216,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "632": {
                w: "",
                h: "303",
                p: "no-repeat",
                x: "visible",
                a: 260,
                q: "100% 100%",
                b: 67,
                j: "absolute",
                bF: "625",
                z: 1,
                k: "div",
                c: 120,
                d: 225,
                r: "inline",
                e: 0
              },
              "626": {
                w: "",
                h: "12",
                p: "no-repeat",
                x: "visible",
                a: 1,
                q: "100% 100%",
                b: 173,
                j: "absolute",
                bF: "625",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "509" },
                    { p: 4, h: "602" }
                  ]
                },
                z: 5,
                k: "div",
                d: 204,
                c: 168,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "629": {
                w: "",
                h: "14",
                p: "no-repeat",
                x: "visible",
                a: 0,
                q: "100% 100%",
                b: 17,
                j: "absolute",
                bF: "625",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "531" },
                    { p: 4, h: "421" }
                  ]
                },
                z: 6,
                k: "div",
                d: 191,
                c: 163,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "624": {
                w: "",
                h: "6",
                p: "no-repeat",
                x: "visible",
                a: 332,
                q: "100% 100%",
                b: 268,
                j: "absolute",
                r: "none",
                z: 1,
                k: "div",
                c: 224,
                d: 229,
                t: 20,
                e: 1,
                f: 0
              },
              "630": {
                w: "",
                h: "257",
                p: "no-repeat",
                x: "visible",
                a: 324,
                q: "100% 100%",
                b: 163,
                j: "absolute",
                bF: "625",
                z: 10,
                k: "div",
                c: 32,
                d: 33,
                r: "inline",
                e: 1
              },
              "635": {
                w: "",
                h: "8",
                p: "no-repeat",
                x: "visible",
                a: 260,
                q: "100% 100%",
                b: 67,
                j: "absolute",
                bF: "625",
                aA: { a: [{ p: 0 }] },
                z: 2,
                k: "div",
                d: 225,
                c: 120,
                t: 15,
                e: 1,
                aP: "default",
                r: "inline",
                f: 0
              },
              "638": {
                h: "279",
                p: "no-repeat",
                x: "visible",
                a: 203,
                q: "100% 100%",
                b: 22,
                j: "absolute",
                bF: "625",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "554" },
                    { p: 4, h: "420" }
                  ]
                },
                k: "div",
                z: 11,
                d: 39,
                c: 38,
                r: "inline",
                e: 1,
                aP: "pointer"
              }
            }
          },
          {
            o: "416",
            p: "600px",
            x: 2,
            cA: false,
            Z: 490,
            Y: 490,
            c: "#FFFFFF",
            L: [],
            bY: 1,
            d: 490,
            U: {},
            T: {
              kTimelineDefaultIdentifier: {
                i: "kTimelineDefaultIdentifier",
                n: "Main Timeline",
                z: 0.15,
                b: [],
                a: [
                  { f: "c", y: 0, z: 0.15, i: "e", e: 0, s: 1, o: "648" },
                  { f: "c", y: 0, z: 0.06, i: "e", e: 1, s: 0, o: "651" },
                  { y: 0.06, i: "e", s: 1, z: 0, o: "651", f: "c" },
                  { y: 0.15, i: "e", s: 0, z: 0, o: "648", f: "c" }
                ],
                f: 30
              }
            },
            bZ: 180,
            O: [
              "647",
              "642",
              "644",
              "646",
              "649",
              "653",
              "643",
              "652",
              "654",
              "650",
              "648",
              "651",
              "645",
              "641",
              "640",
              "656",
              "655"
            ],
            v: {
              "650": {
                h: "12",
                p: "no-repeat",
                x: "visible",
                a: 1,
                q: "100% 100%",
                b: 173,
                j: "absolute",
                bF: "641",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "509" },
                    { p: 4, h: "602" }
                  ]
                },
                k: "div",
                z: 4,
                d: 204,
                c: 168,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "655": {
                w: "",
                h: "6",
                p: "no-repeat",
                x: "visible",
                a: 332,
                q: "100% 100%",
                b: 268,
                j: "absolute",
                r: "none",
                z: 1,
                k: "div",
                c: 224,
                d: 229,
                t: 20,
                e: 1,
                f: 0
              },
              "647": {
                h: "287",
                p: "no-repeat",
                x: "visible",
                a: 49,
                q: "100% 100%",
                b: 87,
                j: "absolute",
                bF: "641",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "531" },
                    { p: 4, h: "421" }
                  ]
                },
                k: "div",
                z: 13,
                d: 37,
                c: 28,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "642": {
                h: "285",
                p: "no-repeat",
                x: "visible",
                a: 57,
                q: "100% 100%",
                b: 261,
                j: "absolute",
                bF: "641",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "509" },
                    { p: 4, h: "602" }
                  ]
                },
                k: "div",
                z: 12,
                d: 33,
                c: 32,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "653": {
                h: "169",
                p: "no-repeat",
                x: "visible",
                a: 147,
                q: "100% 100%",
                b: 157,
                j: "absolute",
                bF: "641",
                z: 8,
                k: "div",
                c: 94,
                d: 75,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "656": {
                h: "91",
                p: "no-repeat",
                x: "visible",
                a: 397,
                q: "100% 100%",
                b: 350,
                j: "absolute",
                r: "none",
                c: 94,
                k: "div",
                z: 15,
                d: 75
              },
              "645": {
                w: "",
                h: "8",
                p: "no-repeat",
                x: "visible",
                a: 260,
                q: "100% 100%",
                b: 67,
                j: "absolute",
                bF: "641",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "468" },
                    { p: 4, h: "604" }
                  ]
                },
                z: 1,
                k: "div",
                d: 225,
                c: 120,
                t: 15,
                e: 1,
                aP: "pointer",
                r: "inline"
              },
              "651": {
                h: "390",
                p: "no-repeat",
                x: "visible",
                a: 131,
                q: "100% 100%",
                b: 241,
                j: "absolute",
                bF: "641",
                aA: { a: [{ p: 0 }] },
                z: 2,
                k: "div",
                d: 141,
                c: 220,
                r: "inline",
                e: 0,
                aP: "pointer",
                f: 0
              },
              "640": {
                w: "",
                h: "303",
                p: "no-repeat",
                x: "visible",
                a: 509,
                q: "100% 100%",
                b: 262,
                j: "absolute",
                r: "none",
                c: 120,
                k: "div",
                z: 16,
                d: 225
              },
              "648": {
                h: "10",
                p: "no-repeat",
                x: "visible",
                a: 130,
                q: "100% 100%",
                b: 240,
                j: "absolute",
                bF: "641",
                aA: { a: [{ p: 0 }] },
                k: "div",
                z: 3,
                d: 142,
                c: 222,
                r: "inline",
                e: 1,
                aP: "default"
              },
              "643": {
                c: 154,
                d: 154,
                I: "None",
                r: "inline",
                J: "None",
                K: "None",
                g: "#FFB000",
                L: "None",
                M: 0,
                N: 0,
                aI: "50%",
                A: "#D8DDE4",
                x: "visible",
                j: "absolute",
                O: 0,
                aJ: "50%",
                k: "div",
                C: "#D8DDE4",
                z: 7,
                B: "#D8DDE4",
                D: "#D8DDE4",
                aK: "50%",
                bF: "641",
                P: 0,
                a: 112,
                aL: "50%",
                b: 114
              },
              "654": {
                w: "",
                h: "14",
                p: "no-repeat",
                x: "visible",
                a: 0,
                q: "100% 100%",
                b: 17,
                j: "absolute",
                bF: "641",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "531" },
                    { p: 4, h: "421" }
                  ]
                },
                z: 5,
                k: "div",
                d: 191,
                c: 163,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "646": {
                h: "279",
                p: "no-repeat",
                x: "visible",
                a: 203,
                q: "100% 100%",
                b: 22,
                j: "absolute",
                bF: "641",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "554" },
                    { p: 4, h: "420" }
                  ]
                },
                k: "div",
                z: 10,
                d: 39,
                c: 38,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "641": {
                k: "div",
                x: "visible",
                c: 380,
                d: 382,
                z: 17,
                a: 55,
                j: "absolute",
                b: 54
              },
              "652": {
                h: "16",
                p: "no-repeat",
                x: "visible",
                a: 114,
                q: "100% 100%",
                b: 0,
                j: "absolute",
                bF: "641",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "554" },
                    { p: 4, h: "420" }
                  ]
                },
                k: "div",
                z: 6,
                d: 130,
                c: 216,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "649": {
                h: "257",
                p: "no-repeat",
                x: "visible",
                a: 324,
                q: "100% 100%",
                b: 163,
                j: "absolute",
                bF: "641",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "468" },
                    { p: 4, h: "604" }
                  ]
                },
                k: "div",
                z: 9,
                d: 33,
                c: 32,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "644": {
                h: "283",
                p: "no-repeat",
                x: "visible",
                a: 230,
                q: "100% 100%",
                b: 314,
                j: "absolute",
                bF: "641",
                z: 11,
                k: "div",
                c: 33,
                d: 33,
                r: "inline",
                e: 1
              }
            }
          },
          {
            o: "527",
            p: "600px",
            x: 3,
            cA: false,
            Z: 490,
            Y: 490,
            c: "#FFFFFF",
            L: [],
            bY: 1,
            d: 490,
            U: {},
            T: {
              kTimelineDefaultIdentifier: {
                i: "kTimelineDefaultIdentifier",
                n: "Main Timeline",
                z: 0.15,
                b: [],
                a: [
                  { f: "c", y: 0, z: 0.15, i: "e", e: 0, s: 1, o: "661" },
                  { f: "c", y: 0, z: 0.06, i: "e", e: 1, s: 0, o: "667" },
                  { y: 0.06, i: "e", s: 1, z: 0, o: "667", f: "c" },
                  { y: 0.15, i: "e", s: 0, z: 0, o: "661", f: "c" }
                ],
                f: 30
              }
            },
            bZ: 180,
            O: [
              "663",
              "664",
              "666",
              "671",
              "662",
              "673",
              "660",
              "670",
              "665",
              "661",
              "667",
              "668",
              "672",
              "669",
              "659",
              "674",
              "657",
              "658"
            ],
            v: {
              "669": {
                w: "",
                h: "8",
                p: "no-repeat",
                x: "visible",
                a: 260,
                q: "100% 100%",
                b: 67,
                j: "absolute",
                bF: "659",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "468" },
                    { p: 4, h: "604" }
                  ]
                },
                z: 1,
                k: "div",
                d: 225,
                c: 120,
                t: 15,
                e: 1,
                aP: "pointer",
                r: "inline"
              },
              "658": {
                w: "",
                h: "6",
                p: "no-repeat",
                x: "visible",
                a: 332,
                q: "100% 100%",
                b: 268,
                j: "absolute",
                r: "none",
                z: 1,
                k: "div",
                c: 224,
                d: 229,
                t: 20,
                e: 1,
                f: 0
              },
              "664": {
                h: "285",
                p: "no-repeat",
                x: "visible",
                a: 57,
                q: "100% 100%",
                b: 261,
                j: "absolute",
                bF: "659",
                z: 13,
                k: "div",
                c: 32,
                d: 33,
                r: "inline",
                e: 1
              },
              "670": {
                h: "16",
                p: "no-repeat",
                x: "visible",
                a: 114,
                q: "100% 100%",
                b: 0,
                j: "absolute",
                bF: "659",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "554" },
                    { p: 4, h: "420" }
                  ]
                },
                k: "div",
                z: 7,
                d: 130,
                c: 216,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "667": {
                h: "528",
                p: "no-repeat",
                x: "visible",
                a: 1,
                q: "100% 100%",
                b: 173,
                j: "absolute",
                bF: "659",
                aA: { a: [{ d: 1.1000000000000001, p: 1, g: 1, e: "509" }] },
                k: "div",
                z: 4,
                d: 204,
                c: 168,
                r: "inline",
                e: 0,
                aP: "pointer"
              },
              "662": {
                h: "257",
                p: "no-repeat",
                x: "visible",
                a: 324,
                q: "100% 100%",
                b: 163,
                j: "absolute",
                bF: "659",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "468" },
                    { p: 4, h: "604" }
                  ]
                },
                k: "div",
                z: 10,
                d: 33,
                c: 32,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "673": {
                h: "169",
                p: "no-repeat",
                x: "visible",
                a: 147,
                q: "100% 100%",
                b: 157,
                j: "absolute",
                bF: "659",
                z: 9,
                k: "div",
                c: 94,
                d: 75,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "659": {
                k: "div",
                x: "visible",
                c: 380,
                d: 382,
                z: 17,
                a: 55,
                j: "absolute",
                b: 54
              },
              "660": {
                c: 154,
                d: 154,
                I: "None",
                r: "inline",
                J: "None",
                K: "None",
                g: "#FFB000",
                L: "None",
                M: 0,
                N: 0,
                aI: "50%",
                A: "#D8DDE4",
                x: "visible",
                j: "absolute",
                O: 0,
                aJ: "50%",
                k: "div",
                C: "#D8DDE4",
                z: 8,
                B: "#D8DDE4",
                D: "#D8DDE4",
                aK: "50%",
                bF: "659",
                P: 0,
                a: 112,
                aL: "50%",
                b: 114
              },
              "665": {
                w: "",
                h: "14",
                p: "no-repeat",
                x: "visible",
                a: 0,
                q: "100% 100%",
                b: 17,
                j: "absolute",
                bF: "659",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "531" },
                    { p: 4, h: "421" }
                  ]
                },
                z: 6,
                k: "div",
                d: 191,
                c: 163,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "671": {
                h: "279",
                p: "no-repeat",
                x: "visible",
                a: 203,
                q: "100% 100%",
                b: 22,
                j: "absolute",
                bF: "659",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "554" },
                    { p: 4, h: "420" }
                  ]
                },
                k: "div",
                z: 11,
                d: 39,
                c: 38,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "668": {
                h: "10",
                p: "no-repeat",
                x: "visible",
                a: 130,
                q: "100% 100%",
                b: 240,
                j: "absolute",
                bF: "659",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "393" },
                    { p: 4, h: "603" }
                  ]
                },
                k: "div",
                z: 3,
                d: 142,
                c: 222,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "657": {
                h: "91",
                p: "no-repeat",
                x: "visible",
                a: 397,
                q: "100% 100%",
                b: 350,
                j: "absolute",
                r: "none",
                c: 94,
                k: "div",
                z: 15,
                d: 75
              },
              "663": {
                h: "287",
                p: "no-repeat",
                x: "visible",
                a: 49,
                q: "100% 100%",
                b: 87,
                j: "absolute",
                bF: "659",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "531" },
                    { p: 4, h: "421" }
                  ]
                },
                k: "div",
                z: 14,
                d: 37,
                c: 28,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "674": {
                w: "",
                h: "303",
                p: "no-repeat",
                x: "visible",
                a: 509,
                q: "100% 100%",
                b: 262,
                j: "absolute",
                r: "none",
                c: 120,
                k: "div",
                z: 16,
                d: 225
              },
              "666": {
                h: "283",
                p: "no-repeat",
                x: "visible",
                a: 230,
                q: "100% 100%",
                b: 314,
                j: "absolute",
                bF: "659",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "393" },
                    { p: 4, h: "603" }
                  ]
                },
                k: "div",
                z: 12,
                d: 33,
                c: 33,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "661": {
                h: "12",
                p: "no-repeat",
                x: "visible",
                a: 1,
                q: "100% 100%",
                b: 173,
                j: "absolute",
                bF: "659",
                aA: { a: [{ p: 0 }] },
                k: "div",
                z: 5,
                d: 204,
                c: 168,
                r: "inline",
                e: 1,
                aP: "default"
              },
              "672": {
                h: "390",
                p: "no-repeat",
                x: "visible",
                a: 131,
                q: "100% 100%",
                b: 241,
                j: "absolute",
                bF: "659",
                aA: { a: [{ p: 0 }] },
                z: 2,
                k: "div",
                d: 141,
                c: 220,
                r: "inline",
                e: 0,
                aP: "pointer",
                f: 0
              }
            }
          },
          {
            o: "550",
            p: "600px",
            x: 4,
            cA: false,
            Z: 490,
            Y: 490,
            c: "#FFFFFF",
            L: [],
            bY: 1,
            d: 490,
            U: {},
            T: {
              kTimelineDefaultIdentifier: {
                i: "kTimelineDefaultIdentifier",
                n: "Main Timeline",
                z: 0.15,
                b: [],
                a: [
                  { f: "c", y: 0, z: 0.15, i: "e", e: 0, s: 1, o: "676" },
                  { f: "c", y: 0, z: 0.06, i: "e", e: 1, s: 0, o: "685" },
                  { y: 0.06, i: "e", s: 1, z: 0, o: "685", f: "c" },
                  { y: 0.15, i: "e", s: 0, z: 0, o: "676", f: "c" }
                ],
                f: 30
              }
            },
            bZ: 180,
            O: [
              "693",
              "689",
              "680",
              "678",
              "683",
              "684",
              "686",
              "687",
              "679",
              "676",
              "685",
              "677",
              "681",
              "682",
              "688",
              "675",
              "692",
              "691",
              "690"
            ],
            v: {
              "686": {
                h: "169",
                p: "no-repeat",
                x: "visible",
                a: 147,
                q: "100% 100%",
                b: 157,
                j: "absolute",
                bF: "675",
                z: 9,
                k: "div",
                c: 94,
                d: 75,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "681": {
                h: "10",
                p: "no-repeat",
                x: "visible",
                a: 130,
                q: "100% 100%",
                b: 240,
                j: "absolute",
                bF: "675",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "393" },
                    { p: 4, h: "603" }
                  ]
                },
                k: "div",
                z: 3,
                d: 142,
                c: 222,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "675": {
                k: "div",
                x: "visible",
                c: 380,
                d: 382,
                z: 17,
                a: 55,
                j: "absolute",
                b: 54
              },
              "692": {
                w: "",
                h: "303",
                p: "no-repeat",
                x: "visible",
                a: 509,
                q: "100% 100%",
                b: 262,
                j: "absolute",
                r: "none",
                c: 120,
                k: "div",
                z: 16,
                d: 225
              },
              "689": {
                h: "287",
                p: "no-repeat",
                x: "visible",
                a: 49,
                q: "100% 100%",
                b: 87,
                j: "absolute",
                bF: "675",
                z: 14,
                k: "div",
                c: 28,
                d: 37,
                r: "inline",
                e: 1
              },
              "684": {
                w: "",
                h: "257",
                p: "no-repeat",
                x: "visible",
                a: 324,
                q: "100% 100%",
                b: 163,
                j: "absolute",
                bF: "675",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "468" },
                    { p: 4, h: "604" }
                  ]
                },
                z: 10,
                k: "div",
                d: 33,
                c: 32,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "678": {
                h: "283",
                p: "no-repeat",
                x: "visible",
                a: 230,
                q: "100% 100%",
                b: 314,
                j: "absolute",
                bF: "675",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "393" },
                    { p: 4, h: "603" }
                  ]
                },
                k: "div",
                z: 12,
                d: 33,
                c: 33,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "690": {
                w: "",
                h: "6",
                p: "no-repeat",
                x: "visible",
                a: 332,
                q: "100% 100%",
                b: 268,
                j: "absolute",
                r: "none",
                z: 1,
                k: "div",
                c: 224,
                d: 229,
                t: 20,
                e: 1,
                f: 0
              },
              "687": {
                c: 154,
                d: 154,
                I: "None",
                r: "inline",
                J: "None",
                K: "None",
                g: "#FFB000",
                L: "None",
                M: 0,
                N: 0,
                aI: "50%",
                A: "#D8DDE4",
                x: "visible",
                j: "absolute",
                O: 0,
                aJ: "50%",
                k: "div",
                C: "#D8DDE4",
                z: 8,
                B: "#D8DDE4",
                D: "#D8DDE4",
                aK: "50%",
                bF: "675",
                P: 0,
                a: 112,
                aL: "50%",
                b: 114
              },
              "676": {
                h: "14",
                p: "no-repeat",
                x: "visible",
                a: 0,
                q: "100% 100%",
                b: 17,
                j: "absolute",
                bF: "675",
                aA: { a: [{ p: 0 }] },
                k: "div",
                z: 6,
                d: 191,
                c: 163,
                r: "inline",
                e: 1,
                aP: "default"
              },
              "682": {
                h: "390",
                p: "no-repeat",
                x: "visible",
                a: 131,
                q: "100% 100%",
                b: 241,
                j: "absolute",
                bF: "675",
                aA: { a: [{ p: 0 }] },
                z: 2,
                k: "div",
                d: 141,
                c: 220,
                r: "inline",
                e: 0,
                aP: "pointer",
                f: 0
              },
              "693": {
                h: "528",
                p: "no-repeat",
                x: "visible",
                a: 250,
                q: "100% 100%",
                b: 368,
                j: "absolute",
                r: "none",
                aA: { a: [{ d: 1.1000000000000001, p: 1, g: 1, e: "509" }] },
                k: "div",
                z: 21,
                d: 204,
                c: 168,
                e: 0,
                aP: "pointer"
              },
              "679": {
                h: "16",
                p: "no-repeat",
                x: "visible",
                a: 114,
                q: "100% 100%",
                b: 0,
                j: "absolute",
                bF: "675",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "554" },
                    { p: 4, h: "420" }
                  ]
                },
                k: "div",
                z: 7,
                d: 130,
                c: 216,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "680": {
                h: "285",
                p: "no-repeat",
                x: "visible",
                a: 57,
                q: "100% 100%",
                b: 261,
                j: "absolute",
                bF: "675",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "509" },
                    { p: 4, h: "602" }
                  ]
                },
                k: "div",
                z: 13,
                d: 33,
                c: 32,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "685": {
                h: "551",
                p: "no-repeat",
                x: "visible",
                a: 0,
                q: "100% 100%",
                b: 17,
                j: "absolute",
                bF: "675",
                z: 5,
                k: "div",
                c: 164,
                d: 191,
                r: "inline",
                e: 0
              },
              "691": {
                h: "91",
                p: "no-repeat",
                x: "visible",
                a: 397,
                q: "100% 100%",
                b: 350,
                j: "absolute",
                r: "none",
                c: 94,
                k: "div",
                z: 15,
                d: 75
              },
              "688": {
                w: "",
                h: "8",
                p: "no-repeat",
                x: "visible",
                a: 260,
                q: "100% 100%",
                b: 67,
                j: "absolute",
                bF: "675",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "468" },
                    { p: 4, h: "604" }
                  ]
                },
                z: 1,
                k: "div",
                d: 225,
                c: 120,
                t: 15,
                e: 1,
                aP: "pointer",
                r: "inline"
              },
              "677": {
                h: "12",
                p: "no-repeat",
                x: "visible",
                a: 1,
                q: "100% 100%",
                b: 173,
                j: "absolute",
                bF: "675",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "509" },
                    { p: 4, h: "602" }
                  ]
                },
                k: "div",
                z: 4,
                d: 204,
                c: 168,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "683": {
                h: "279",
                p: "no-repeat",
                x: "visible",
                a: 203,
                q: "100% 100%",
                b: 22,
                j: "absolute",
                bF: "675",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "554" },
                    { p: 4, h: "420" }
                  ]
                },
                k: "div",
                z: 11,
                d: 39,
                c: 38,
                r: "inline",
                e: 1,
                aP: "pointer"
              }
            }
          },
          {
            o: "574",
            p: "600px",
            x: 5,
            cA: false,
            Z: 490,
            Y: 490,
            c: "#FFFFFF",
            L: [],
            bY: 1,
            d: 490,
            U: {},
            T: {
              kTimelineDefaultIdentifier: {
                i: "kTimelineDefaultIdentifier",
                n: "Main Timeline",
                z: 0.15,
                b: [],
                a: [
                  { f: "c", y: 0, z: 0.15, i: "e", e: 0, s: 1, o: "708" },
                  { f: "c", y: 0, z: 0.06, i: "e", e: 1, s: 0, o: "710" },
                  { y: 0.06, i: "e", s: 1, z: 0, o: "710", f: "c" },
                  { y: 0.15, i: "e", s: 0, z: 0, o: "708", f: "c" }
                ],
                f: 30
              }
            },
            bZ: 180,
            O: [
              "711",
              "694",
              "697",
              "703",
              "704",
              "709",
              "698",
              "707",
              "700",
              "708",
              "710",
              "699",
              "702",
              "706",
              "701",
              "705",
              "696",
              "712",
              "713",
              "695"
            ],
            v: {
              "701": {
                h: "390",
                p: "no-repeat",
                x: "visible",
                a: 131,
                q: "100% 100%",
                b: 241,
                j: "absolute",
                bF: "696",
                aA: { a: [{ p: 0 }] },
                z: 2,
                k: "div",
                d: 141,
                c: 220,
                r: "inline",
                e: 0,
                aP: "pointer",
                f: 0
              },
              "695": {
                w: "",
                h: "6",
                p: "no-repeat",
                x: "visible",
                a: 332,
                q: "100% 100%",
                b: 268,
                j: "absolute",
                r: "none",
                z: 1,
                k: "div",
                c: 224,
                d: 229,
                t: 20,
                e: 1,
                f: 0
              },
              "706": {
                h: "10",
                p: "no-repeat",
                x: "visible",
                a: 130,
                q: "100% 100%",
                b: 240,
                j: "absolute",
                bF: "696",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "393" },
                    { p: 4, h: "603" }
                  ]
                },
                k: "div",
                z: 3,
                d: 142,
                c: 222,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "710": {
                h: "575",
                p: "no-repeat",
                x: "visible",
                a: 114,
                q: "100% 100%",
                b: 0,
                j: "absolute",
                bF: "696",
                z: 6,
                k: "div",
                c: 216,
                d: 130,
                r: "inline",
                e: 0
              },
              "702": {
                w: "",
                h: "12",
                p: "no-repeat",
                x: "visible",
                a: 1,
                q: "100% 100%",
                b: 173,
                j: "absolute",
                bF: "696",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "509" },
                    { p: 4, h: "602" }
                  ]
                },
                z: 4,
                k: "div",
                d: 204,
                c: 168,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "696": {
                k: "div",
                x: "visible",
                c: 380,
                d: 382,
                z: 17,
                a: 55,
                j: "absolute",
                b: 54
              },
              "707": {
                h: "169",
                p: "no-repeat",
                x: "visible",
                a: 147,
                q: "100% 100%",
                b: 157,
                j: "absolute",
                bF: "696",
                z: 9,
                k: "div",
                c: 94,
                d: 75,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "711": {
                h: "551",
                p: "no-repeat",
                x: "visible",
                a: 249,
                q: "100% 100%",
                b: 212,
                j: "absolute",
                r: "none",
                c: 164,
                k: "div",
                z: 23,
                d: 191,
                e: 0
              },
              "703": {
                h: "285",
                p: "no-repeat",
                x: "visible",
                a: 57,
                q: "100% 100%",
                b: 261,
                j: "absolute",
                bF: "696",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "509" },
                    { p: 4, h: "602" }
                  ]
                },
                k: "div",
                z: 13,
                d: 33,
                c: 32,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "697": {
                h: "287",
                p: "no-repeat",
                x: "visible",
                a: 49,
                q: "100% 100%",
                b: 87,
                j: "absolute",
                bF: "696",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "531" },
                    { p: 4, h: "421" }
                  ]
                },
                k: "div",
                z: 14,
                d: 37,
                c: 28,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "708": {
                h: "16",
                p: "no-repeat",
                x: "visible",
                a: 114,
                q: "100% 100%",
                b: 0,
                j: "absolute",
                bF: "696",
                z: 7,
                k: "div",
                c: 216,
                d: 130,
                r: "inline",
                e: 1,
                aP: "default"
              },
              "712": {
                w: "",
                h: "303",
                p: "no-repeat",
                x: "visible",
                a: 509,
                q: "100% 100%",
                b: 262,
                j: "absolute",
                r: "none",
                c: 120,
                k: "div",
                z: 16,
                d: 225
              },
              "704": {
                h: "283",
                p: "no-repeat",
                x: "visible",
                a: 230,
                q: "100% 100%",
                b: 314,
                j: "absolute",
                bF: "696",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "393" },
                    { p: 4, h: "603" }
                  ]
                },
                k: "div",
                z: 12,
                d: 33,
                c: 33,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "698": {
                w: "",
                h: "257",
                p: "no-repeat",
                x: "visible",
                a: 324,
                q: "100% 100%",
                b: 163,
                j: "absolute",
                bF: "696",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "468" },
                    { p: 4, h: "604" }
                  ]
                },
                z: 10,
                k: "div",
                d: 33,
                c: 32,
                r: "inline",
                e: 1,
                aP: "pointer"
              },
              "709": {
                h: "279",
                p: "no-repeat",
                x: "visible",
                a: 203,
                q: "100% 100%",
                b: 22,
                j: "absolute",
                bF: "696",
                z: 11,
                k: "div",
                c: 38,
                d: 39,
                r: "inline",
                e: 1
              },
              "700": {
                c: 154,
                d: 154,
                I: "None",
                r: "inline",
                J: "None",
                K: "None",
                g: "#FFB000",
                L: "None",
                M: 0,
                N: 0,
                aI: "50%",
                A: "#D8DDE4",
                x: "visible",
                j: "absolute",
                O: 0,
                aJ: "50%",
                k: "div",
                C: "#D8DDE4",
                z: 8,
                B: "#D8DDE4",
                D: "#D8DDE4",
                aK: "50%",
                bF: "696",
                P: 0,
                a: 112,
                aL: "50%",
                b: 114
              },
              "694": {
                h: "528",
                p: "no-repeat",
                x: "visible",
                a: 250,
                q: "100% 100%",
                b: 368,
                j: "absolute",
                r: "none",
                aA: { a: [{ d: 1.1000000000000001, p: 1, g: 1, e: "509" }] },
                k: "div",
                z: 21,
                d: 204,
                c: 168,
                e: 0,
                aP: "pointer"
              },
              "713": {
                h: "91",
                p: "no-repeat",
                x: "visible",
                a: 397,
                q: "100% 100%",
                b: 350,
                j: "absolute",
                r: "none",
                c: 94,
                k: "div",
                z: 15,
                d: 75
              },
              "705": {
                w: "",
                h: "8",
                p: "no-repeat",
                x: "visible",
                a: 260,
                q: "100% 100%",
                b: 67,
                j: "absolute",
                bF: "696",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "468" },
                    { p: 4, h: "604" }
                  ]
                },
                z: 1,
                k: "div",
                d: 225,
                c: 120,
                t: 15,
                e: 1,
                aP: "pointer",
                r: "inline"
              },
              "699": {
                h: "14",
                p: "no-repeat",
                x: "visible",
                a: 0,
                q: "100% 100%",
                b: 17,
                j: "absolute",
                bF: "696",
                aA: {
                  a: [
                    { d: 1.1000000000000001, p: 1, g: 1, e: "531" },
                    { p: 4, h: "421" }
                  ]
                },
                k: "div",
                z: 5,
                d: 191,
                c: 163,
                r: "inline",
                e: 1,
                aP: "pointer"
              }
            }
          }
        ],
        {},
        h,
        {},
        0,
        false,
        false,
        true,
        -1,
        true,
        true,
        true
      );
      g[d] = f.API;
      document.getElementById(c).setAttribute("HYP_dn", d);
      f.z_o(this.body);
    }
  })();
})();
