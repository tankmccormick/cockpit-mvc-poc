import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

// contexts
import RootUrlContext from '../contexts/rootUrlContext';

export default class BreadcrumbList extends React.Component {
    render() {
        return (
            <RootUrlContext.Consumer>
                {root => (
                    <Breadcrumb tag="nav" listTag="div">
                        {this.props.items.map((item, i) => {
                            if (item.active) {
                                return (
                                    <BreadcrumbItem key={i} active>
                                        <span>{item.text}</span>
                                    </BreadcrumbItem>
                                );
                            } else {
                                return (
                                    <BreadcrumbItem key={i}>
                                        <NavLink to={root + item.url}>{item.text}</NavLink>
                                    </BreadcrumbItem>
                                );
                            }
                        })}
                    </Breadcrumb>
                )}
            </RootUrlContext.Consumer>
        );
    }
}