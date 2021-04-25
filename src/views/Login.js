import React, { useEffect, useState } from 'react';
import qs from 'qs';
import ls from 'local-storage';

// import sections
import Oauth from '../components/sections/Oauth';

const Login = (props) => {
    const [code, setCode] = useState(null);
    const [tokenData, setTokenData] = useState(ls.get('tokenData'));
    const [userIdentity, setUserIdentity] = useState(null);

    useEffect(() => {
        (async () => {
            const queryString = qs.parse(props.location.search, { ignoreQueryPrefix: true });

            if (!queryString.code) {
                // window.location = 'https://discord.com/api/oauth2/authorize?client_id=665512711672823838&redirect_uri=https%3A%2F%2Falexuh.com%2Flogin&response_type=code&scope=email%20guilds%20identify'
                window.location = 'https://discord.com/api/oauth2/authorize?client_id=665512711672823838&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&response_type=code&scope=email%20guilds%20identify';
            } else {
                setCode(queryString.code);
            }
        })();
    }, []);

    useEffect(() => {
        (async() => {
            if (!code || tokenData) return;
            const response = await fetch(`https://discord.com/api/oauth2/token`,
                {
                    method: 'POST',
                    headers: {
                        Authorization: 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        client_id: '665512711672823838',
                        client_secret: 'RVwSAFUr8S8_mUuGo9-IxbghRzpp-IGt',
                        grant_type: 'authorization_code',
                        code,
                        redirect_uri: 'http://localhost:3000/login'
                    })
                });
            const json = await response.json();
            setTokenData(json);
            ls.set('tokenData', json);
        })();
    }, [code]);

    useEffect(() => {
        if (!tokenData) return;
        getUserIdentity();
    }, [tokenData]);

    const getUserIdentity = async () => {
        return fetch('https://discord.com/api/users/@me', {
            headers: {
				authorization: `${tokenData.token_type} ${tokenData.access_token}`
			}
        })
        .then(async (response) => setUserIdentity(await response.json()));
    }

    return (
        <>
        <Oauth className="illustration-section-02" userIdentity={userIdentity} />
        {/* <FeaturesTiles /> */}
        {/* <CommandList /> */}
        {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
        {/* <Testimonial topDivider />
        <Cta split /> */}
        </>
    );
}

export default Login;