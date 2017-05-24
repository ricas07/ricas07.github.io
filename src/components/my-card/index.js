import React from 'react';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
  } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const MyCard = () => (
  <Card>
    <CardHeader
      title="Ricardo Perez"
      subtitle="Software Engineer"
      avatar="https://lh3.googleusercontent.com/-R0baXZfRLRY/AAAAAAAAAAI/AAAAAAAAAAA/AAyYBF7SEO-1Ltxjk0rMfaB2p1uxzZWkVw/s64-c-mo/photo.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="Building Things Together" subtitle="Imagine That..." />}
    >
      <img src="/img/fist-bump.jpg" alt="Fist bump between multiple people" />
    </CardMedia>
    <CardTitle title="My Story" />
    <CardText>
      <div className="work-block">
        <h3>Software Engineer</h3>
        <h4>iCentris</h4>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Ruby on Rails</li>
        </ul>
      </div>

      <div className="work-block">
        <h3>Web Developer</h3>
        <h4>Pinnacle Entertainment</h4>
        <ul>
          <li>Javascript</li>
          <li>CSS</li>
          <li>C#</li>
        </ul>
      </div>

      <div className="work-block">
        <h3>Ruby Developer</h3>
        <h4>comF5</h4>
        <ul>
          <li>Ruby on Rails</li>
          <li>Javascript</li>
          <li>CSS</li>
        </ul>
      </div>
    </CardText>
    <CardActions>
      <RaisedButton
        label="Contact Me"
        primary
        onClick={() => window.open('mailto:ricas07@gmail.com')}
      />
    </CardActions>
  </Card>
);

export default MyCard;
