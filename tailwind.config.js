/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      margin: {
        "398px": "365px",
        "45px":"45px",
        "50px": "50px",
        "70px": "70px",
        "110px": "110px",
        "-91px": "-91px",
        "-147px": "-147px",
        "25px":"25px",
        "257px":"257px",
        "186px":"186px",
        "113px":"113px",
        "300px":"300px",
        "custom-margin": "-712px auto 0 calc(((100% - 1140px) / 2));",
        "custom-2":"20px calc(((100% - 1140px) / 2) + 233px) 0 calc(((100% - 1140px) / 2))",
      
      },

      colors: {
        "custom-yellow": "#f1c50e",
      },

      backgroundColor: {
        "custom-yellow": "#f1c50e",
        "custom-blue": "#0d244b",
        "custom-white": "#f5f7fa",
        "custom-light-yellow": "#f5edcc",
        "custom-gray": "#f9f9f9",
        "custom-dark-blue-color": "#0d244b",
        "custom-light-gray":"#f2f2f2",
        "pure-white":"#ffffff",
        "footer-gray":"#333333"
      },
      padding: {
        "pad-btn": "15px 51px 16px",
        "30px": "30px",
        "20px": "20px",
        "24px": "24px",
        "100px": "100px",
        "70px": "70px",
        "60px":"60px",
        "50px":"50px"
      },
      maxWidth: {
        "1182px": "1182px",
      },
      borderRadius: {
        "35px": "35px",
      },
      width: {
        "317px": "317px",
        "64px": "64px",
        "288px": "288px",
        "88px": "88px",
        "392px":"392px",
        "46px": "46px",
        "63px": "63px",
        "935px": "935px",
        "965px":"965px",
        "1000px":"1000px",
        "1140px":"1140px",
        "1326px":"1326px",
        "30%":"30%",
        "47%":"47%",
        "15%":"15%",
        "39%":"39%",
        "custom-calc": "calc(((100% - 1140px) / 2) + 587px)",
      },
      height: {
        "96px": "96px",
        "372px": "372px",
        "377px": "377px",
        "88px": "88px",
        "63px": "63px",
        "575px": "575px",
        "800px": "800px",
        "551px":"551px",
        "590px":"590px",
        "700px":"700px",
        "1000px":"1000px",
        "1700px":"1700px",
        "1200px":"1200px",
        "1300px":"1300px",
        "822px":"822px",
        "1920px":"1920px"
      },
      lineHeight: {
        "40px": "40px",
      },
      inset: {
        "220px": "220px",
        "64px":"64px",
        "37rem":"37rem",
        "61rem":"61rem",
        "55rem":"55rem",
        "28rem":"28rem",
        "78rem":"78rem",
        "89rem":"89rem",
        "82rem":"82rem"
      },
    },
  },
  plugins: [],
};
