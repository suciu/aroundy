import request from "superagent";

const get = async (token) => {

    let response = new Promise((resolve, reject) => {
            request
                .get(`http://aroundy.local/api/user/all-info`)
                .query({token: token})
                .end((err, res) => {
                    if (!res.body.allInfo) {
                        return reject(res.body.success);
                    }

                    return resolve(res.body.allInfo);
                });
    });

    return await response;
};

export default {
  get
}
