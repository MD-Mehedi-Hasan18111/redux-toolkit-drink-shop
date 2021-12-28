import Button from '@restart/ui/esm/Button';
import React, { useContext, useEffect, useState } from 'react';
import { Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { cartContext } from '../../App';
import NavBar from '../Navbar/Navbar';
import SingleDrink from '../SingleDrink/SingleDrink';
import { useDispatch, useSelector} from 'react-redux';
import { setAllJuice, setCart } from '../../redux/slice';

const Drinks = () => {

    const [searchText, setSearchText] = useState('');

    const dispatch = useDispatch();
    const drinks = useSelector((state) => state.juice.allJuice);
    // console.log(drinks);
    // const cart = useSelector((state) => state.juice.cart);
 
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => dispatch(setAllJuice(data?.drinks)));
    }, [searchText])

    const searchHandler = (event) => {
        setSearchText(event.target.value);
    }

    const addToDrinks = (drink) => {
        // console.log(myDrink);
        const obj = { ...drink };
        obj.quantity = 1;
        dispatch(setCart(obj));
    }

    // console.log(drinks);

    return (
        <div>
            <InputGroup className="mb-3 w-50 mx-auto my-4">
                <FormControl
                    onChange={searchHandler}
                    placeholder="Search..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <button className="btn btn-info">
                    Search
                </button>
            </InputGroup>
            <Container className="my-4">
                <Row className="g-4 ps-5">
                    {
                        drinks?.map(drink => <SingleDrink key={drink.idDrink} addToDrinks={addToDrinks} drink={drink}></SingleDrink>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Drinks;