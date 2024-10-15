import styled from 'styled-components';

export const Container = styled.div `
    .carousel-item {
        padding-right: 40px;
    }
    overflow-x: hidden;

    .react-multi-carousel-list {
        overflow: visible;
    }

    .react-multiple-carousel__arrow--left {
        left: 15px;
        top: 10px;
    }

    .react-multiple-carousel__arrow--right {
        right: 55px;
        top: 10px;
    }

    padding-left: 50px;
    padding-bottom: 40px;
`;

export const Title = styled.h2 `
    font-size: 34px;
    font-weight: 800;
    color: #61A120;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin: 70px 0;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 56px;
        height: 4px;
        background-color: #61A120;
    }
`;

// export const ContainerItems = styled.div `
//     background: url('${(props) => props.imageUrl}');
//     background-position: center;
//     background-size: cover;

//     display: flex;
//     align-items: center;
//     padding: 20px 10px;
//     width: 100%;
//     height: 250px;
//     border-radius: 20px;

//     p {
//         color: #fff;
//         background-color: rgba(0, 0, 0, 0.5);
//         padding: 10px 30px;
//         border-radius: 30px;
//         font-size: 22.5px;
//         font-weight: bold;
//         margin-top: 180px;
//     }
// `;
