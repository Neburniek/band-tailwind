module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'title': ['Kumar One Outline', "Arial", "Helvetica", "sans-serif"],
      'body': ["Arial", "Helvetica", "sans-serif"]
    },
    textColor: {
      "title": "#FF0000"
    },
    maxHeight: {
      'image': "250px"
    },
    screens: {

      "md": { "min": "700px" },
      "lg": { "min": "992px" }
    },
    extend: {
      spacing: {
        'imageBox': '550px',
        "frame": "382px",
        "frameBox": "650px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
