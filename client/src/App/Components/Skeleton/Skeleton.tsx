import './Skeleton.css'

type Props = {

    rows?: number,
    fillSpace?: boolean,

}

const Skeleton = (props: Props) => {

    const rows = props.rows || 1;

    let elements: JSX.Element[] = [];

    for(let i = 0; i < rows; i++) {
        elements.push(<div key={`skeleton-row-${i}`} className={`temp-skeleton-item ${props.fillSpace ? 'fill' : ''}`}></div>);
    }

    return (
        <div className="temp-skeleton-wrapper">

            {elements}

        </div>
    )

}

export default Skeleton;