

const DownloadBtn = ({ src, store }) => {
  return (
    <button className='btn btn--download'>
      <div className="btn--download__content">
        <div className="btn--download__logo">
          <img src={src} alt="" />
        </div>
        <div className="btn--download__typo">
          <div>Download on</div>
          <div>{store}</div>
        </div>
      </div>
    </button>
  )
}

export default DownloadBtn