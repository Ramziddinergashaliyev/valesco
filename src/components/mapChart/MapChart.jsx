// import React, { useEffect } from "react";
// import * as am5 from "@amcharts/amcharts5";
// import * as am5map from "@amcharts/amcharts5/map";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

// import logoIcon from "../../assets/icons/logo1.png";

// import "./mapChart.scss"

// const MapChart = () => {
//   useEffect(() => {
//     const root = am5.Root.new("chartdiv");
//     root.setThemes([am5themes_Animated.new(root)]);

//     const map = root.container.children.push(
//       am5map.MapChart.new(root, {
//         panX: "none",
//         projection: am5map.geoNaturalEarth1(),
//       })
//     );

//     const polygonSeries = map.series.push(
//       am5map.MapPolygonSeries.new(root, {
//         geoJSON: am5geodata_worldLow,
//         exclude: ["AQ"],
//         fill: am5.color(0xbbbbbb),
//       })
//     );

//     const polygonTemplate = polygonSeries.mapPolygons.template;
//     polygonTemplate.setAll({
//       tooltipText: "{name}",
//       interactive: false,
//       fill: am5.color(0xbbbbbb),
//       stroke: am5.color(0xe0e0e0), // Ochroq kulrang chegara
//       strokeWidth: 0.5,
//     });

//     const pointSeries = map.series.push(am5map.MapPointSeries.new(root, {}));
//     const countryColor = am5.color(0xff0000);

//     // To'g'irlandi: mamlakat nomlari va ID'lar bir xil formatda
//     const countryIdMapping = {
//       "Kazakhstan": "KZ",
//       "Tajikistan": "TJ",
//       "Turkmenistan": "TM",
//       "Russian Federation": "RU",  // to'g'irlandi
//       "Azerbaijan": "AZ",           // to'g'irlandi
//       "Kyrgyzstan": "KG",           // to'g'irlandi
//       "Uzbekistan": "UZ"
//     };

//     pointSeries.bullets.push((root, series, dataItem) => {
//       const container = am5.Container.new(root, {
//         cursorOverStyle: "pointer",
//       });

//       const line = am5.Line.new(root, {
//         stroke: countryColor,
//         strokeWidth: 3,
//         height: -50,
//         strokeGradient: am5.LinearGradient.new(root, {
//           stops: [{ opacity: 1 }, { opacity: 0 }],
//         }),
//       });
//       container.children.push(line);

//       const circle = am5.Circle.new(root, {
//         radius: 1,
//         fill: countryColor,
//         stroke: am5.color(0xffffff),
//         strokeWidth: 3,
//         dy: -50,
//       });
//       container.children.push(circle);

//       const pulseCircle = am5.Circle.new(root, {
//         radius: 16,
//         fill: countryColor,
//         fillOpacity: 0.3,
//         dy: -50,
//       });

//       container.children.push(pulseCircle);
//       container.children.moveValue(pulseCircle, 0);

//       pulseCircle.animate({
//         key: "scale",
//         from: 1,
//         to: 2.5,
//         duration: 1500,
//         loops: Infinity,
//         easing: am5.ease.out(am5.ease.cubic),
//       });

//       pulseCircle.animate({
//         key: "fillOpacity",
//         from: 0.5,
//         to: 0,
//         duration: 1500,
//         loops: Infinity,
//         easing: am5.ease.out(am5.ease.cubic),
//       });

//       const logoImage = am5.Picture.new(root, {
//         width: 34,
//         height: 34,
//         src: logoIcon,
//         centerX: am5.p50,
//         centerY: am5.p50,
//         dy: -50,
//         opacity: 1,
//       });
//       container.children.push(logoImage);

//       const label = am5.Label.new(root, {
//         text: dataItem.dataContext.title,
//         fill: am5.color(0xffffff),
//         background: am5.RoundedRectangle.new(root, {
//           fill: countryColor,
//           fillOpacity: 0.9,
//           cornerRadiusTL: 4,
//           cornerRadiusTR: 4,
//           cornerRadiusBL: 4,
//           cornerRadiusBR: 4,
//         }),
//         paddingTop: 5,      // qo'shildi
//         paddingBottom: 5,   // qo'shildi
//         paddingLeft: 10,    // qo'shildi
//         paddingRight: 10,   // qo'shildi
//         fontWeight: "500",
//         fontSize: "0.9em",
//         centerX: am5.p50,
//         centerY: am5.p50,
//         dy: 20,
//         opacity: 0,
//       });
//       container.children.push(label);

//       const hoverArea = am5.Circle.new(root, {
//         radius: 60,
//         fill: am5.color(0x000000),
//         fillOpacity: 0,
//         dy: -50,
//       });
//       container.children.push(hoverArea);
//       container.children.moveValue(hoverArea, 0);

//       hoverArea.events.on("pointerover", () => {
//         label.animate({ key: "opacity", to: 1, duration: 200 });

//         const countryName = dataItem.dataContext.title;
//         const countryId = countryIdMapping[countryName];

//         if (countryId) {
//           polygonSeries.mapPolygons.each((polygon) => {
//             if (polygon.dataItem.get("id") === countryId) {
//               polygon.states.create("hover", {
//                 fill: am5.color(0xff0000),
//                 fillOpacity: 0.3,
//                 stroke: am5.color(0xff0000),
//                 strokeWidth: 2,
//               });
//               polygon.states.apply("hover");
//             }
//           });
//         }
//       });

//       hoverArea.events.on("pointerout", () => {
//         label.animate({ key: "opacity", to: 0, duration: 200 });

//         const countryName = dataItem.dataContext.title;
//         const countryId = countryIdMapping[countryName];

//         if (countryId) {
//           polygonSeries.mapPolygons.each((polygon) => {
//             if (polygon.dataItem.get("id") === countryId) {
//               polygon.states.apply("default");
//             }
//           });
//         }
//       });

//       return am5.Bullet.new(root, { sprite: container });
//     });

//     const data = [
//       { title: "Kazakhstan", latitude: 48.0196, longitude: 66.9237 },
//       { title: "Tajikistan", latitude: 38.8610, longitude: 71.2761 },
//       { title: "Turkmenistan", latitude: 38.9697, longitude: 59.5563 },
//       { title: "Kyrgyzstan", latitude: 41.2044, longitude: 74.7661 },
//       { title: "Uzbekistan", latitude: 41.3775, longitude: 64.5853 },
//       { title: "Azerbaijan", latitude: 40.1431, longitude: 47.5769 },
//       { title: "Russian Federation", latitude: 55.7558, longitude: 37.6173 }
//     ];


//     pointSeries.data.setAll(
//       data.map((d) => ({
//         geometry: { type: "Point", coordinates: [d.longitude, d.latitude] },
//         title: d.title,
//       }))
//     );

//     return () => root.dispose();
//   }, []);

//   return (
//     <div
//       className="chartDiv"
//       id="chartdiv"
//       style={{ width: "100%", height: "600px", backgroundColor: "#fff" }}
//     ></div>
//   );
// };

// export default MapChart;

// import React, { useEffect } from "react";
// import * as am5 from "@amcharts/amcharts5";
// import * as am5map from "@amcharts/amcharts5/map";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

// import logoIcon from "../../assets/icons/logo1.png";

// import "./mapChart.scss"

// const MapChart = () => {
//   useEffect(() => {
//     const root = am5.Root.new("chartdiv");
//     root.setThemes([am5themes_Animated.new(root)]);

//     const map = root.container.children.push(
//       am5map.MapChart.new(root, {
//         panX: "none",
//         projection: am5map.geoNaturalEarth1(),
//       })
//     );

//     const polygonSeries = map.series.push(
//       am5map.MapPolygonSeries.new(root, {
//         geoJSON: am5geodata_worldLow,
//         exclude: ["AQ"],
//         fill: am5.color(0xbbbbbb),
//       })
//     );

//     const polygonTemplate = polygonSeries.mapPolygons.template;
//     polygonTemplate.setAll({
//       tooltipText: "{name}",
//       interactive: false,
//       fill: am5.color(0xbbbbbb),
//       stroke: am5.color(0xe0e0e0),
//       strokeWidth: 0.5,
//     });

//     const pointSeries = map.series.push(am5map.MapPointSeries.new(root, {}));
//     const countryColor = am5.color(0xff0000);

//     const countryIdMapping = {
//       "Kazakhstan": "KZ",
//       "Tajikistan": "TJ",
//       "Turkmenistan": "TM",
//       "Russian Federation": "RU",
//       "Azerbaijan": "AZ",
//       "Kyrgyzstan": "KG",
//       "Uzbekistan": "UZ"
//     };

//     pointSeries.bullets.push((root, series, dataItem) => {
//       const container = am5.Container.new(root, {
//         cursorOverStyle: "pointer",
//       });

//       const line = am5.Line.new(root, {
//         stroke: countryColor,
//         strokeWidth: 3,
//         height: -50,
//         strokeGradient: am5.LinearGradient.new(root, {
//           stops: [{ opacity: 1 }, { opacity: 0 }],
//         }),
//       });
//       container.children.push(line);

//       const circle = am5.Circle.new(root, {
//         radius: 1,
//         fill: countryColor,
//         stroke: am5.color(0xffffff),
//         strokeWidth: 3,
//         dy: -50,
//       });
//       container.children.push(circle);

//       const pulseCircle = am5.Circle.new(root, {
//         radius: 16,
//         fill: countryColor,
//         fillOpacity: 0.3,
//         dy: -50,
//       });

//       container.children.push(pulseCircle);
//       container.children.moveValue(pulseCircle, 0);

//       pulseCircle.animate({
//         key: "scale",
//         from: 1,
//         to: 2.5,
//         duration: 1500,
//         loops: Infinity,
//         easing: am5.ease.out(am5.ease.cubic),
//       });

//       pulseCircle.animate({
//         key: "fillOpacity",
//         from: 0.5,
//         to: 0,
//         duration: 1500,
//         loops: Infinity,
//         easing: am5.ease.out(am5.ease.cubic),
//       });

//       const logoImage = am5.Picture.new(root, {
//         width: 34,
//         height: 34,
//         src: logoIcon,
//         centerX: am5.p50,
//         centerY: am5.p50,
//         dy: -50,
//         opacity: 1,
//       });
//       container.children.push(logoImage);

//       const label = am5.Label.new(root, {
//         text: dataItem.dataContext.title,
//         fill: am5.color(0xffffff),
//         background: am5.RoundedRectangle.new(root, {
//           fill: countryColor,
//           fillOpacity: 0.9,
//           cornerRadiusTL: 4,
//           cornerRadiusTR: 4,
//           cornerRadiusBL: 4,
//           cornerRadiusBR: 4,
//         }),
//         paddingTop: 5,
//         paddingBottom: 5,
//         paddingLeft: 10,
//         paddingRight: 10,
//         fontWeight: "500",
//         fontSize: "0.9em",
//         centerX: am5.p50,
//         centerY: am5.p50,
//         dy: 20,
//         opacity: 0,
//       });
//       container.children.push(label);

//       const hoverArea = am5.Circle.new(root, {
//         radius: 60,
//         fill: am5.color(0x000000),
//         fillOpacity: 0,
//         dy: -50,
//       });
//       container.children.push(hoverArea);
//       container.children.moveValue(hoverArea, 0);

//       hoverArea.events.on("pointerover", () => {
//         label.animate({ key: "opacity", to: 1, duration: 200 });

//         const countryName = dataItem.dataContext.title;
//         const countryId = countryIdMapping[countryName];

//         if (countryId) {
//           polygonSeries.mapPolygons.each((polygon) => {
//             if (polygon.dataItem.get("id") === countryId) {
//               // Rossiya uchun faqat asosiy qismni highlight qilish
//               if (countryId === "RU") {
//                 const centroid = polygon.visualCentroid();
//                 // Sharqiy qismni (Alaskaga yaqin hudud) o'tkazib yuborish
//                 if (centroid && centroid.longitude > 170) return;
//               }
              
//               polygon.states.create("hover", {
//                 fill: am5.color(0xff0000),
//                 fillOpacity: 0.3,
//                 stroke: am5.color(0xff0000),
//                 strokeWidth: 2,
//               });
//               polygon.states.apply("hover");
//             }
//           });
//         }
//       });

//       hoverArea.events.on("pointerout", () => {
//         label.animate({ key: "opacity", to: 0, duration: 200 });

//         const countryName = dataItem.dataContext.title;
//         const countryId = countryIdMapping[countryName];

//         if (countryId) {
//           polygonSeries.mapPolygons.each((polygon) => {
//             if (polygon.dataItem.get("id") === countryId) {
//               polygon.states.apply("default");
//             }
//           });
//         }
//       });

//       return am5.Bullet.new(root, { sprite: container });
//     });

//     const data = [
//       { title: "Kazakhstan", latitude: 48.0196, longitude: 66.9237 },
//       { title: "Tajikistan", latitude: 38.8610, longitude: 71.2761 },
//       { title: "Turkmenistan", latitude: 38.9697, longitude: 59.5563 },
//       { title: "Kyrgyzstan", latitude: 41.2044, longitude: 74.7661 },
//       { title: "Uzbekistan", latitude: 41.3775, longitude: 64.5853 },
//       { title: "Azerbaijan", latitude: 40.1431, longitude: 47.5769 },
//       { title: "Russian Federation", latitude: 55.7558, longitude: 37.6173 }
//     ];

//     pointSeries.data.setAll(
//       data.map((d) => ({
//         geometry: { type: "Point", coordinates: [d.longitude, d.latitude] },
//         title: d.title,
//       }))
//     );

//     return () => root.dispose();
//   }, []);

//   return (
//     <div
//       className="chartDiv"
//       id="chartdiv"
//       style={{ width: "100%", height: "600px", backgroundColor: "#fff" }}
//     ></div>
//   );
// };

// export default MapChart;

import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as amcharts_map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

import logoIcon from "../../assets/icons/logo1.png";
import "./mapChart.scss";

const MapChart = () => {
  useEffect(() => {
    const root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);

    const map = root.container.children.push(
      amcharts_map.MapChart.new(root, {
        panX: "none",
        projection: amcharts_map.geoNaturalEarth1(),
      })
    );

    const polygonSeries = map.series.push(
      amcharts_map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
        fill: am5.color(0xbbbbbb),
      })
    );

    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.setAll({
      tooltipText: "{name}",
      interactive: false,
      fill: am5.color(0xbbbbbb),
      stroke: am5.color(0xe0e0e0),
      strokeWidth: 0.5,
    });

    const pointSeries = map.series.push(amcharts_map.MapPointSeries.new(root, {}));
    const countryColor = am5.color(0xff0000);

    const countryIdMapping = {
      Kazakhstan: "KZ",
      Tajikistan: "TJ",
      Turkmenistan: "TM",
      "Russian Federation": "RU",
      Azerbaijan: "AZ",
      Kyrgyzstan: "KG",
      Uzbekistan: "UZ",
    };

    pointSeries.bullets.push((root, series, dataItem) => {
      const container = am5.Container.new(root, {
        cursorOverStyle: "pointer",
      });

      // Line
      const line = am5.Line.new(root, {
        stroke: countryColor,
        strokeWidth: 3,
        height: -50,
        strokeGradient: am5.LinearGradient.new(root, {
          stops: [{ opacity: 1 }, { opacity: 0 }],
        }),
      });
      container.children.push(line);

      // Small dot
      const circle = am5.Circle.new(root, {
        radius: 1,
        fill: countryColor,
        stroke: am5.color(0xffffff),
        strokeWidth: 3,
        dy: -50,
      });
      container.children.push(circle);

      // Pulse
      const pulseCircle = am5.Circle.new(root, {
        radius: 16,
        fill: countryColor,
        fillOpacity: 0.3,
        dy: -50,
      });
      container.children.push(pulseCircle);
      container.children.moveValue(pulseCircle, 0);

      pulseCircle.animate({
        key: "scale",
        from: 1,
        to: 2.5,
        duration: 1500,
        loops: Infinity,
        easing: am5.ease.out(am5.ease.cubic),
      });
      pulseCircle.animate({
        key: "fillOpacity",
        from: 0.5,
        to: 0,
        duration: 1500,
        loops: Infinity,
        easing: am5.ease.out(am5.ease.cubic),
      });

      // Logo
      const logoImage = am5.Picture.new(root, {
        width: 34,
        height: 34,
        src: logoIcon,
        centerX: am5.p50,
        centerY: am5.p50,
        dy: -50,
      });
      container.children.push(logoImage);

      // Label (hidden by default)
      const label = am5.Label.new(root, {
        text: dataItem.dataContext.title,
        fill: am5.color(0xffffff),
        background: am5.RoundedRectangle.new(root, {
          fill: countryColor,
          fillOpacity: 0.9,
          cornerRadiusTL: 4,
          cornerRadiusTR: 4,
          cornerRadiusBL: 4,
          cornerRadiusBR: 4,
        }),
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: "500",
        fontSize: "0.9em",
        centerX: am5.p50,
        centerY: am5.p50,
        dy: 20,
        opacity: 0,
      });
      container.children.push(label);

      // ===== HOVER AREA (FIXED) =====
      // Make it interactive and place it on TOP so it captures pointer events.
      const hoverArea = am5.Circle.new(root, {
        radius: 60,
        fill: am5.color(0x000000),
        fillOpacity: 0, // invisible but active
        dy: -50,
        interactive: true, // <-- crucial
      });

      container.children.push(hoverArea);

      // move hoverArea to the top of children so it won't be behind other sprites
      container.children.moveValue(hoverArea, container.children.length - 1);

      // HOVER: pointerover
      hoverArea.events.on("pointerover", () => {
        label.animate({ key: "opacity", to: 1, duration: 200 });

        const countryName = dataItem.dataContext.title;
        const countryId = countryIdMapping[countryName];

        if (countryId) {
          polygonSeries.mapPolygons.each((polygon) => {
            if (polygon.dataItem.get("id") === countryId) {
              if (countryId === "RU") {
                const bbox = polygon.geoBounds();
                if (
                  bbox.west > 150 ||
                  bbox.east < 20 ||
                  bbox.south < 40
                ) {
                  return;
                }
              }
              polygon.states.create("hover", {
                fill: am5.color(0xff0000),
                fillOpacity: 0.3,
                stroke: am5.color(0xff0000),
                strokeWidth: 2,
              });
              polygon.states.apply("hover");
            }
          });
        }
      });

      // HOVER OUT: pointerout
      hoverArea.events.on("pointerout", () => {
        label.animate({ key: "opacity", to: 0, duration: 200 });

        const countryName = dataItem.dataContext.title;
        const countryId = countryIdMapping[countryName];

        if (countryId) {
          polygonSeries.mapPolygons.each((polygon) => {
            if (polygon.dataItem.get("id") === countryId) {
              polygon.states.apply("default");
            }
          });
        }
      });

      return am5.Bullet.new(root, { sprite: container });
    });

    // Data points
    const data = [
      { title: "Kazakhstan", latitude: 48.0196, longitude: 66.9237 },
      { title: "Tajikistan", latitude: 38.861, longitude: 71.2761 },
      { title: "Turkmenistan", latitude: 38.9697, longitude: 59.5563 },
      { title: "Kyrgyzstan", latitude: 41.2044, longitude: 74.7661 },
      { title: "Uzbekistan", latitude: 41.3775, longitude: 64.5853 },
      { title: "Azerbaijan", latitude: 40.1431, longitude: 47.5769 },
      { title: "Russian Federation", latitude: 55.7558, longitude: 37.6173 },
    ];

    pointSeries.data.setAll(
      data.map((d) => ({
        geometry: { type: "Point", coordinates: [d.longitude, d.latitude] },
        title: d.title,
      }))
    );

    return () => root.dispose();
  }, []);

  return (
    <div
      className="chartDiv"
      id="chartdiv"
      style={{ width: "100%", height: "600px", backgroundColor: "#fff" }}
    />
  );
};

export default MapChart;
