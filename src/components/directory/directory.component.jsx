import React from 'react';
import MenuItem  from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  link: 'shop/hats',
                  id: 1
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  link: 'shop/jackets',
                  id: 2
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  link: 'shop/sneakers',
                  id: 3
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  link: 'shop/womens',
                  id: 4
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  link: 'shop/mens',
                  id: 5
                }
            ]
        }
    }

    render(){
        return (
            <div className="directory-menu">
                {this.state.sections.map(({title, id, imageUrl, size, link})=>(
                    <MenuItem key={id} head={title} subtitle="Shop Now" url={imageUrl} size={size} link={link}/>
                ))}
            </div>
        )
    }
}

export default Directory;