import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';


const commands = [ 
  "Mic Check",
  "Tell Me a Joke",
  "Play Despacito",
  "Volume 5 (1-10)",
  "Pause",
  "Resume",
  "Stop",
  "Kick Tim",
  "Mute Gerald",
  "Unmute Kyle",
  "Mute Everyone",
  "Help me clutch (Also mutes everyone)",
  "Unmute Everyone",
  "Show Me a Tiger",
  "Give Me a Waifu",
  "Roast Tyler",
  "Spell Lantern",
  "How do I Craft a Wooden Pickaxe? (Minecraft)",
  "Where we dropping? (Fortnite)",
  "Leave"
]



const CommandList = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
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
      <div className="container-sm has-top-divider">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <center>
                <span className="text-color-secondary">Alexuh, </span> help
              </center>
            </h1>
          </div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <div className="reveal-from-bottom" style={{columns: 2, marginTop: "3rem"}}>
              {commands.map(command => {
                return (
                  <ul key={command} className="reveal-from-bottom" data-reveal-delay="500">
                    <span className="text-color-secondary">Alexuh, </span>  
                    <span className="text-color-primary"> {command}</span>
                  </ul>
                )  
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default CommandList;