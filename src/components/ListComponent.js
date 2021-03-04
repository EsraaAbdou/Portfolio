import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { PORTFOLIOITEMS } from '../shared/portfolioItems';

function ListItem (props) {
    return (
        <article className="col-md-4 mb-5">
            <a href={props.link} target="_blank" rel="noreferrer">
                <Card className="h-100">
                <div className="page" style={{backgroundImage: `url('/assets/images/${props.img}')`}}></div>
                    <CardBody>
                        <CardTitle tag="h5">{props.title}</CardTitle>
                        <CardText>{props.desc}</CardText>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                            {props.tags.map(tag =><span className="badge bg-secondary text-white mr-1">#{tag}</span>)}
                        </CardSubtitle>
                    </CardBody>
                </Card>
            </a>
        </article>
    );
}
function ListComponent () {
    const listItems = PORTFOLIOITEMS.map(item => 
        <ListItem title={item.title} desc={item.description} tags={item.tags} img={item.img} link={item.link} />
    );
    return(
        <section className="my-5">
            <div className="container-md">
                <div className="row">
                    {listItems}
                </div>
            </div>
        </section>   
    );
}

export default ListComponent;
