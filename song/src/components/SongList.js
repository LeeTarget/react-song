import React from 'react';
import {connect} from 'react-redux';
import {selectedSong} from '../action';

class SongList extends React.Component {

    render() {
        return this.props.songList.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button summary"
                                onClick={() => this.props.selectedSong(song)}>
                                    {song.title}
                        </button>
                    </div>
                </div>
            )
        });
    }
}

const mapStateToProps = (state)=>{
    return  { songList: state.songList };
};

export default connect(mapStateToProps, {selectedSong})(SongList);