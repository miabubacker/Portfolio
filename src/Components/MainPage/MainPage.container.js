import {connect} from 'react-redux';
import { defaultMemoize } from 'reselect';
import { bindActionCreators } from 'redux';
import * as MainPageActions from './MainPage.actionHandler';
import _get from 'lodash/get';
import { compose } from 'recompose';
import Mainpage from './Mainpage';



const MainPageDetailsActions = defaultMemoize(dispatch => bindActionCreators({ ...MainPageActions }, dispatch));

const mapDispatchToProps = dispatch => ({
    MainPageActions: MainPageDetailsActions(dispatch),
});

const mapStateToProps = ({
    MainPagereducer,
}) => ({
    loading: _get(MainPagereducer, 'loading'),
    headers:_get(MainPagereducer, 'headers'),
    hamburger:_get(MainPagereducer, 'hamburger'),
    projects:_get(MainPagereducer, 'projects'),
    filterProjects:_get(MainPagereducer, 'filterProjects'),
    typeofProject:_get(MainPagereducer, 'typeofProject'),
    

});

export default compose(
  connect(mapStateToProps, mapDispatchToProps))(Mainpage);