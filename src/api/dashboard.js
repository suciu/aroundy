import request from "superagent";

const get = async (token) => {

    let response = new Promise((resolve, reject) => {
            request
                .get(`http://aroundy.local/api/user/all-info`)
                .query({token: token})
                .end((err, res) => {
                    if (!res.body.data) {
                        return reject(res.body.success);
                    }

                    return resolve(res.body.data);
                });
    });

    return await response;
};

export default {
  get
}
