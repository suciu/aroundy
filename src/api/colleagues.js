import request from "superagent";

const all = async (token) => {

    let response = new Promise((resolve, reject) => {
            request
                .get(`http://aroundy.local/api/user/all`)
                .query({token: token})
                .end((err, res) => {
                    if (!res.body.allUsers) {
                        return reject(res.body.success);
                    }

                    return resolve(res.body.allUsers);
                });
    });

    return await response;
};

export default {
  all
}
