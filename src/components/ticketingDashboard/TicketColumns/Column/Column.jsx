import React, { Component } from 'react';
import styles from './Column.module.scss';
import DropDown from '../../../DropDown';

class Column extends Component {
  state = {  }

  renderFilter = () => this.props.filter ? <DropDown filterOptions={['Date: earliest', 'Date: latest', 'Category']} /> : <p>{}</p>;

  render() { 
      return (

        <article className={styles.TicketColumn}> 
          <div className={styles.topOfColumn}>
            <h3>{this.props.title}</h3>
            {this.renderFilter()}
          </div>
          <section title={this.props.title} >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa numquam nisi labore amet eos sed voluptates ducimus sint, aliquam, ad dolorum facilis natus hic saepe pariatur reprehenderit repellat quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa numquam nisi labore amet eos sed voluptates ducimus sint, aliquam, ad dolorum facilis natus hic saepe pariatur reprehenderit repellat quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa numquam nisi labore amet eos sed voluptates ducimus sint, aliquam, ad dolorum facilis natus hic saepe pariatur reprehenderit repellat quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa numquam nisi labore amet eos sed voluptates ducimus sint, aliquam, ad dolorum facilis natus hic saepe pariatur reprehenderit repellat quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa numquam nisi labore amet eos sed voluptates ducimus sint, aliquam, ad dolorum facilis natus hic saepe pariatur reprehenderit repellat quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa numquam nisi labore amet eos sed voluptates ducimus sint, aliquam, ad dolorum facilis natus hic saepe pariatur reprehenderit repellat quaerat.</p>
            {/* Ticketview goes in here */}
          </section>
        </article>

    )
  }
}

export default Column ;
