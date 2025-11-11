// import React, { useEffect } from "react";
// import * as am5 from "@amcharts/amcharts5";
// import * as am5map from "@amcharts/amcharts5/map";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import am5geodata_continentsLow from "@amcharts/amcharts5-geodata/continentsLow.js";

// import "./mapChart.scss";
// import logoIcon from "../../assets/icons/logoo.png";

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

//     map.series.push(
//       am5map.MapPolygonSeries.new(root, {
//         geoJSON: am5geodata_continentsLow,
//         exclude: ["antarctica"],
//         fill: am5.color(0xbbbbbb),
//       })
//     );

//     const pointSeries = map.series.push(am5map.MapPointSeries.new(root, {}));

//     const countryColors = {
//       "United States": am5.color(0xff0000), 
//       "European Union": am5.color(0xff0000),
//       "Asia": am5.color(0xff0000), 
//       "Africa": am5.color(0xff0000),
//     };

//     pointSeries.bullets.push((root, series, dataItem) => {
//       const container = am5.Container.new(root, {
//         cursorOverStyle: "pointer",
//       });

//       const color =
//         countryColors[dataItem.dataContext.title] || am5.color(0xbbbbbb);

//       const line = am5.Line.new(root, {
//         stroke: color,
//         strokeWidth: 3,
//         height: -50,
//         strokeGradient: am5.LinearGradient.new(root, {
//           stops: [{ opacity: 1 }, { opacity: 0 }],
//         }),
//       });
//       container.children.push(line);

//       const circle = am5.Circle.new(root, {
//         radius: 18,
//         fill: color,
//         stroke: am5.color(0xffffff),
//         strokeWidth: 3,
//         dy: -50,
//       });
//       container.children.push(circle);

//       const pulseCircle = am5.Circle.new(root, {
//         radius: 16,
//         fill: color,
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
//         width: 28,
//         height: 28,
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
//           fill: color,
//           fillOpacity: 0.9,
//           cornerRadiusTL: 8,
//           cornerRadiusTR: 8,
//           cornerRadiusBL: 8,
//           cornerRadiusBR: 8,
//         }),
//         paddingTop: 8,
//         paddingBottom: 8,
//         paddingLeft: 12,
//         paddingRight: 12,
//         fontWeight: "500",
//         fontSize: "1em",
//         centerX: am5.p0,
//         dx: 25,
//         dy: -50,
//         opacity: 0,
//         scale: 0.8,
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
//         label.animate({ key: "scale", to: 1, duration: 200 });
//         circle.animate({ key: "radius", to: 22, duration: 200 });
//       });

//       hoverArea.events.on("pointerout", () => {
//         label.animate({ key: "opacity", to: 0, duration: 200 });
//         label.animate({ key: "scale", to: 0.8, duration: 200 });
//         circle.animate({ key: "radius", to: 18, duration: 200 });
//       });

//       return am5.Bullet.new(root, { sprite: container });
//     });

//     const data = [
//       {
//         title: "United States",
//         latitude: 39.563353,
//         longitude: -99.316406,
//       },
//       {
//         title: "European Union",
//         latitude: 50.896104,
//         longitude: 19.160156,
//       },
//       {
//         title: "Asia",
//         latitude: 47.212106,
//         longitude: 103.183594,
//       },
//       {
//         title: "Africa",
//         latitude: 11.081385,
//         longitude: 21.621094,
//       },
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
//       id="chartdiv"
//       className="map-chart"
//       style={{
//         width: "100%",
//         height: "600px",
//       }}
//     ></div>
//   );
// };

// export default MapChart;



import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

import "./mapChart.scss";
import logoIcon from "../../assets/icons/logoo.png";

const MapChart = () => {
  useEffect(() => {
    const root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);

    const map = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "none",
        projection: am5map.geoNaturalEarth1(),
      })
    );

    // 🌍 World map layer
    map.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"], // Antarctica
        fill: am5.color(0xbbbbbb),
      })
    );

    // 📍 Points (countries)
    const pointSeries = map.series.push(am5map.MapPointSeries.new(root, {}));

    const countryColor = am5.color(0xff0000); // red color

    pointSeries.bullets.push((root, series, dataItem) => {
      const container = am5.Container.new(root, { cursorOverStyle: "pointer" });

      const line = am5.Line.new(root, {
        stroke: countryColor,
        strokeWidth: 3,
        height: -50,
        strokeGradient: am5.LinearGradient.new(root, {
          stops: [{ opacity: 1 }, { opacity: 0 }],
        }),
      });
      container.children.push(line);

      const circle = am5.Circle.new(root, {
        radius: 18,
        fill: countryColor,
        stroke: am5.color(0xffffff),
        strokeWidth: 3,
        dy: -50,
      });
      container.children.push(circle);

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

      const logoImage = am5.Picture.new(root, {
        width: 28,
        height: 28,
        src: logoIcon,
        centerX: am5.p50,
        centerY: am5.p50,
        dy: -50,
        opacity: 1,
      });
      container.children.push(logoImage);

      const label = am5.Label.new(root, {
        text: dataItem.dataContext.title,
        fill: am5.color(0xffffff),
        background: am5.RoundedRectangle.new(root, {
          fill: countryColor,
          fillOpacity: 0.9,
          cornerRadiusTL: 8,
          cornerRadiusTR: 8,
          cornerRadiusBL: 8,
          cornerRadiusBR: 8,
        }),
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: "500",
        fontSize: "0.9em",
        dx: 25,
        dy: -50,
        opacity: 0,
        scale: 0.8,
      });
      container.children.push(label);

      const hoverArea = am5.Circle.new(root, {
        radius: 60,
        fill: am5.color(0x000000),
        fillOpacity: 0,
        dy: -50,
      });
      container.children.push(hoverArea);
      container.children.moveValue(hoverArea, 0);

      hoverArea.events.on("pointerover", () => {
        label.animate({ key: "opacity", to: 1, duration: 200 });
        label.animate({ key: "scale", to: 1, duration: 200 });
        circle.animate({ key: "radius", to: 22, duration: 200 });
      });

      hoverArea.events.on("pointerout", () => {
        label.animate({ key: "opacity", to: 0, duration: 200 });
        label.animate({ key: "scale", to: 0.8, duration: 200 });
        circle.animate({ key: "radius", to: 18, duration: 200 });
      });

      return am5.Bullet.new(root, { sprite: container });
    });

    // 🗺️ Central Asian countries
    const data = [
      {
        title: "Kazakhstan",
        latitude: 48.0196,
        longitude: 66.9237,
      },
      {
        title: "Tajikistan",
        latitude: 38.861,
        longitude: 71.2761,
      },
      {
        title: "Turkmenistan",
        latitude: 38.9697,
        longitude: 59.5563,
      },
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
      id="chartdiv"
      className="map-chart"
      style={{
        width: "100%",
        height: "600px",
      }}
    ></div>
  );
};

export default MapChart;
``
