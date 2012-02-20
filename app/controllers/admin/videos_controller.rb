class Admin::VideosController < AdminController
  rescue_from ActiveRecord::RecordNotFound, with: :video_not_found

  def index
    @videos = Video.all
  end

  def show
    @video = Video.find(params[:id])
    @video.check_encoding_status
  end
  
  def new
    @video = current_user.videos.new
  end

  def create
    @video = current_user.videos.new(params[:video])

    if @video.save
      @video.encode!
      flash[:success] = 'Video successfully created.'
      redirect_to admin_videos_path
    else
      render action: 'new'
    end
  end

  def destroy
    @video = Video.find(params[:id])
    @video.delete_files_from_s3
    @video.destroy
    redirect_to admin_videos_path, notice: 'Video successfully deleted.'
  end

  
  protected
  
  def video_not_found
    redirect_to admin_videos_path, notice: 'Sorry, but that video could not be found.'
  end
end
