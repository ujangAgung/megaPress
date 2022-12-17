<?php

namespace App\Http\Controllers;

use App\Models\Tags;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;

class TagsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Tags', [
            'title' => 'Tag',
            'auth' => auth()->user(),
            'tag' => Tags::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/TambahTags', [
            'title' => 'Tambah Tag',
            'auth' => auth()->user(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $categories = new Tags();
        $categories->deskripsi = $request->deskripsi;
        $categories->slug = Str::slug($request->deskripsi, '-');
        $categories->save();

        return Redirect::route('admin.tag')->with('add', 'Tag ditambahkan.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tags  $tags
     * @return \Illuminate\Http\Response
     */
    public function show(Tags $tags)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tags  $tags
     * @return \Illuminate\Http\Response
     */
    public function edit(Tags $tags, $slug)
    {
        $data =  Tags::where('slug', $slug)->first();
        return Inertia::render('Admin/EditTags', [
            'tag' => [
                'title' => 'Sunting Tag',
                'auth' => auth()->user(),
                'data' => $data
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tags  $tags
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tags $tags)
    {
        $oldTag = Tags::find($request->id);
        if ($request->deskripsi != $oldTag->deskripsi) {
            $request->validate([
                'deskripsi' => 'required|unique:tags,deskripsi'
            ]);
        }else {
            $request->validate([
                'deskripsi' => 'required'
            ]);
        }
        Tags::where('id' , $request->id)->update([
            'deskripsi' => $request->deskripsi,
            'slug' => Str::slug($request->deskripsi, '-')
        ]);
        return Redirect::route('admin.tag')->with('edit', 'Kategori disunting.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tags  $tags
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $tag = Tags::find($request->id);
        $tag->delete();
        return Redirect::route('admin.tag')->with('delete', 'Tag dihapus.');
    }
}
