export default {
   content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
      "/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
   ],

   theme: {
      screens: {
         sm: "640px",
         md: "768px",
         lg: "1024px",
         xl: "1308px",
         "2xl": "1560px",
      },

      container: {
         center: true,
         padding: {
            DEFAULT: "8px",
            md: "10px",
         },
      },

      extend: {
         colors: {
            success: "#22AD5A",
            "gray-50": "#F1F1F1",
            "gray-100": "#f2f2f2",
            "gray-200": "#D9D9D9",
            "gray-300": "#DCDCDC",
            "gray-700": "#575757",
            primary: "#4156D9",
            danger: "#FF2727",
            body: "#f8f8f8",
         },

         boxShadow: {
            box: "0px 4px 8px 0px #4949491C",
         },

         fontFamily: {
            kalamehBold: "kalamehBold",
         },

         spacing: {
            7.5: "30px",
         },

         borderRadius: {
            "2lg": "10px",
            "2.5xl": "18px",
            "4xl": "30px",
            "4.5xl": "35px",
            "5xl": "40px",
         },

         fontSize: {
            "veri-xs": "10px",
            "1.5xl": "18px",
         },
      },
   },
   plugins: [],
};
