import React, { useState, useEffect}  from 'react';
import NavBar from '../../components/NavBar';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import Dialog from '../../components/Dialog';
import NewBirthdayForm from '../../components/NewBirthdayForm/NewBirthdayForm';
import DeleteFriend from '../../components/DeleteFriend';

const Friends =() => {


    const [friends, setFriends] = useState([]);
    const[delFriend,setDelFriend] = useState('');
    const [loading,setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenDel, setIsOpenDel] = useState(false)

    useEffect(() => {
    
        const fechData = async() => {
          try {
            const response = await axios.get('http://localhost:3001/birthday',{ withCredentials: true });
            setFriends(response.data);
            setLoading(false);
            console.log(response);
           
          } catch (error) {
            console.log(error);
            return;
          }
        }
        fechData();
        
    }, []);

    const startDelFriend =(e) =>{
        
        setIsOpenDel(true);
        let friendNameToBeDeleted = e.target.value;
        setDelFriend(friendNameToBeDeleted);
    
    }


    return (
        <>
        <NavBar/>
        <main>
        
        <section className='container-friends'>
        
          <div className="header-friends">
            <h2 style={{textAlign:'center' ,marginLeft: '500px'}}>Friends</h2>
            <input style={{ marginLeft: 'auto'}} onClick={() => setIsOpen(true)} type="button" value="Add new friend"/>
            {/* <input style={{ marginLeft: 'auto'}} onClick={() => setIsOpenDel(true)} type="button" value="Del"/> */}
            <Dialog open={isOpen}>
                <NewBirthdayForm addFriend={(pepole) =>{setFriends(pepole)}}
                                 onClose={() => setIsOpen(false)}
                                 friends={friends}
                />
            </Dialog>
            <Dialog open={isOpenDel}>
                <DeleteFriend removeFriend={(pepole) =>{setFriends(pepole)}}
                                 onClose={() => setIsOpenDel(false)}
                                 delFriend={delFriend}
                                 friends={friends}
                />
            </Dialog>
          </div>
          
          {
            friends.map( (person) => {
            const {dateOfBirth, fullName, img, __v, _id} = person;
            return (
                <>  
                <article key={_id} className='person'>
                    <img src={img} alt={fullName} />
                    <div>
                        <h4>{fullName}</h4>
                        <p>{dateOfBirth.substring(0,10)}</p>
                        <div style={{marginRight:'auto'}}>
                            <button>Edit</button>
                            <button value={_id} onClick={(e) => startDelFriend(e)}>Delete</button>
                        </div>
                    </div>
                </article>
                <hr/>
                </>
            );    
            })
        }
        </section>
        </main>
        </>
    );
}


export default withRouter(Friends);