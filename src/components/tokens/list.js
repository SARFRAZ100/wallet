import React from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import { cardSpace, tables } from 'lib/styles';
import Immutable from 'immutable';
import { gotoScreen } from '../../store/wallet/screen/screenActions';
import Token from './token';

const Render = ({ tokens }) => {
    const styles = {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },
        titleStyle: {
            fontSize: '20px',
        },
    };

    const table = <Table selectable={false}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
                <TableHeaderColumn style={tables.shortStyle}>Name</TableHeaderColumn>
                <TableHeaderColumn style={tables.wideStyle}>Address</TableHeaderColumn>
                <TableHeaderColumn style={tables.wideStyle}>Total Supply</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
            {tokens.map((token) => <Token key={token.get('address')} token={token}/>)}
        </TableBody>
    </Table>;
    const titleAvatar = <Avatar icon={<FontIcon className="fa fa-dot-circle-o fa-2x" />} />;

    return (
        <div id="token-list">
            <Card style={cardSpace}>
                <CardHeader
                    title="Token List"
                    titleStyle={styles.titleStyle}
                    avatar={titleAvatar}
                    actAsExpander={false}
                    showExpandableButton={false}
                />
                <CardText style={styles.root} expandable={false}>
                    {table}
                </CardText>
            </Card>
        </div>
    );
};

const TokensList = connect(
    (state, ownProps) => ({
        tokens: state.tokens.get('tokens', Immutable.List()),
    }),
    (dispatch, ownProps) => ({

    })
)(Render);

export default TokensList;
