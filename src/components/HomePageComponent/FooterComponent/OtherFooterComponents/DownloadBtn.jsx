

const DownloadBtn = ({ src, store }) => {
  return (
    <button className='btn footer__btn--download'>
      <div className="footer__btn--download-content">
        <div className="btn--download__logo">
          <img src={src} alt="" />
        </div>
        <div className="btn--download__typo">
          <div>Download on</div>
          <div className="footer__btn--download-store">{store}</div>
        </div>
      </div>
    </button>
  )
}

export default DownloadBtn