import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

function ListItem (props) {
    return (
        <article className="col-md-4 mb-5">
                <Card className="h-100">
                    <a href={props.link} target="_blank" rel="noreferrer">  
                        <div className="page" style={{backgroundImage: `url('/assets/images/${props.img}')`}}></div>
                        <CardTitle tag="h5" className="pl-4 pt-4">{props.title}</CardTitle>
                    </a>
                    <CardBody className="px-4 py-2">
                        <CardText>{props.desc}</CardText>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                            {props.tags.map((tag, idx) =><span key={idx} className="badge bg-secondary text-white mr-1"
                            onClick={()=> {props.onTagClick(tag)}}>#{tag}</span>)}
                        </CardSubtitle>
                    </CardBody>
                </Card>
        </article>
    );
}
function ListComponent (props) {

    const listItems = props.viewItems.map((item, idx) => 
        <ListItem key={idx} title={item.title} desc={item.description} tags={item.tags} img={item.img} link={item.link}
            onTagClick={props.onTagClick} />
    );

    const filterHeader = (
        <div className="text-primary mb-3">
            <h2>
                <span className="mr-3">showing items with <strong><u>{props.filter}</u></strong> tag</span>
                <Button color="primary" className="text-white font-weight-bold" onClick={props.resetFilter}>reset</Button>
            </h2>
        </div>
    );

    return(
        <section className="my-5">
            <div className="container-md">
                {(props.filter)?filterHeader:<div></div>}
                <div className="row">
                    {listItems}
                </div>
            </div>
        </section>   
    );
}

export default ListComponent;
