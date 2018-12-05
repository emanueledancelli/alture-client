import React, {Component} from "react";
import "./PagesHeader.scss"
import { CloseCircleOutlineIcon } from "mdi-react";


export class PagesHeader extends Component {
    state = {
        isSharingOpen: false,
        isScrolled: false
      };
    
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }

      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
    
      handleScroll = () => {
        if (window.scrollY > 0) {
          this.setState({
            isScrolled: true
          });
        } else {
          this.setState({
            isScrolled: false
          });
        }
      };

    render() {
        const { isScrolled } = this.state;
    
        return (
            <>
                <div className={"pheader " + (isScrolled ? "scrolled" : "")}>
                    <span className="pheader__pl">{this.props.pageTitle}</span>
                    <div></div>
                     <CloseCircleOutlineIcon
                        className="pheader__icon"
                        onClick={this.props.onClick} 
                        size={isScrolled ? 30 : 35}
                    />
                </div>
            </>
        )
    }
}
