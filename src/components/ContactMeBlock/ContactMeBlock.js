import React from "react";
import ScreenBlock from "../ScreenBlock/ScreenBlock";
import { FormattedMessage } from 'react-intl';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './ContactMeBlock.css';
import { CardActions } from "@material-ui/core";

const ContactMeBlock = ({ contactOptions }) => {
    return (
        <ScreenBlock id="ContactMe-block">
            <div className="container">
                <div className="heading">
                    <h2>
                        <FormattedMessage id="Resume.getInTouch" defaultMessage="Let's get in touch!" />
                    </h2>
                    <p>
                        <FormattedMessage
                            id="Resume.clickAway"
                            defaultMessage="Ils me font confiance"
                        />
                    </p>
                </div>
                <div className="ContactMeBlock-options">
                    {contactOptions.map((contact, i) => {
                        return (
                            <div
                                key={i} // eslint-disable-line react/no-array-index-key
                                style={{ padding: '20px' }}
                            >
                                <Card
                                >
                                    <a href={contact.link} target="_blank" rel="noopener noreferrer">
                                        <CardActions style={{ background: '#ccc' }}>
                                            <CardContent>
                                                {typeof contact.icon === 'string' ? (
                                                    <img style={{ width: contact.imageWidth }} alt="" src={contact.icon} />) : (contact.icon)}
                                            </CardContent>
                                        </CardActions>
                                    </a>

                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        </ScreenBlock >
    )
}

export default ContactMeBlock;