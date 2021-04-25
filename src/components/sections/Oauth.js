import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Button from '../elements/Button';
import Image from '../elements/Image';

const propTypes = {
    ...SectionProps.types,
    split: PropTypes.bool
}

const defaultProps = {
    ...SectionProps.defaults,
    split: false
}

const Oauth = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    split,
    ...props
}) => {

    const userIdentity = props.userIdentity;

    console.log(userIdentity);
    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div
                    className={innerClasses}
                >
                    {userIdentity &&
                        <div>

                            <div className="cta-slogan">
                                <h3 className="m-0">Account Linking</h3>
                                <Image
                                    style={{
                                        borderRadius: 50
                                    }}
                                    src={`https://cdn.discordapp.com/avatars/${userIdentity.id}/${userIdentity.avatar}.png`}
                                    alt="Profile Avatar"
                                    width={250}
                                    height={250} />
                                <h3>{userIdentity.username}#{userIdentity.discriminator}</h3>
                            </div>
                            <div className="cta-action">

                                <Button target="_blank" tag="a" color="" wideMobile href="https://discord.com/oauth2/authorize?client_id=665512711672823838&permissions=32829248&scope=bot">
                                    Riot Games Oauth</Button>

                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}

Oauth.propTypes = propTypes;
Oauth.defaultProps = defaultProps;

export default Oauth;