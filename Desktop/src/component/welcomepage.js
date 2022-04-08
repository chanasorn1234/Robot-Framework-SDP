import './welpage.css';
import './Sharingan_Triple.png';
function Welform(){
    return(
        <div className='welform'>
            <div className='weltext'>
                <h1>Welcome to The World</h1>
                <img className='imageWel' src={require('./Sharingan_Triple.png')}></img>
            </div>
        </div>
    );
}
export default Welform;