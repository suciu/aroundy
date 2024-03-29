import request from "superagent";

const all = async (token) => {
    let response = new Promise((resolve, reject) => {
            request
                .get(`http://aroundy.demo/api/user/all`)
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

const save = async (newColleague) => {
    let response = new Promise((resolve, reject) => {
        request
            .post(`http://aroundy.demo/api/user/save`)
            .send(newColleague)
            .end((err, res) => {
                if (!res.body.newUser) {
                    return reject(res.body.success);
                }

                return resolve(res.body.newUser);
            });
    });
    return await response;
};

export default {
    all,
    save
}
