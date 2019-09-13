import request from "superagent";

const all = async (token) => {
    let response = new Promise((resolve, reject) => {
            request
                .get(`http://aroundy.local/api/requests/user`)
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

const allColleaguesReq = async (token) => {
    let response = new Promise((resolve, reject) => {
        request
            .get(`http://aroundy.local/api/requests`)
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

const save = async (newRequest) => {
    let response = new Promise((resolve, reject) => {
        request
            .post(`http://aroundy.local/api/requests/save`)
            .send(newRequest)
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
    all,
    allColleaguesReq,
    save
}
