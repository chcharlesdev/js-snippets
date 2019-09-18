//
//console.log(process.env);

const common = {
    foo: 'common'
};

const dev = {
    foo: "dev"
};

const test = {
    foo: "test"
};

const prod = {
    foo: "prod"
};

const local = { };

function reconcileConstants(env) {
    if (env === "prod")
        return Object.assign({}, common, prod);
  
    else if (env === "test")
       return Object.assign({}, common, test);

    else if (env === "dev")
        return Object.assign({}, common, dev);
  
    return common;
}

const _ = reconcileConstants(process.env.buildEnv);

export const constants = _;

// export const url = "http://localhost:1234";
export const url = {};

export const add = (x, y) => {
  return x + y;
};

export const subtract = (x, y) => {
  return x - y;
};

export const multiply = (x, y) => {
  return x * y;
};
