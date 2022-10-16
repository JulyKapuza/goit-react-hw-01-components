import PropTypes from 'prop-types';
import css from "./Statistics.module.css"





export default function Statistics({ title, stats }) {
   
    return <section className={css.statistics}>
        {title && (<h2 className={css.title}>{title}</h2>)}
        <ul className={css.stat_list}>
            {stats.map(stat => (
                <li  className={css.item} key={stat.id} style={{
                backgroundColor: `${getRandomHexColor(stat.id)}`,
        
      }}>
                    <span className={css.stat_label}> {stat.label}</span>
                    <span className={css.stat_percentage}> {stat.percentage}%</span>
                </li>
     
            ))}
        </ul>
</section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object)
 }


//

/* -------------------------------------------------------------------------- */
/*                        Функція для рандомної зміни кольору                  */
/* -------------------------------------------------------------------------- */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
