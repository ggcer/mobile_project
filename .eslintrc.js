module.exports = {
  root: true,
  env: {
    node: true
  },
  "globals": {
    "globalCode": true,
    "globalConfig": true,
    "interfaces": true,
    "utils": true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
