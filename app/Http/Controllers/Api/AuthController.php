<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController as Controller;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (! auth()->attempt($credentials)) {
            return $this->sendError('Unauthorized!', ['error' => 'Unauthorized'], 401);
        }
        $auth = Auth::user();
        $auth['accessToken'] = $auth->createToken('diosecret')->plainTextToken;

        return $this->sendResponse(new UserResource($auth), 'Berhasil Login');
    }

    public function me()
    {
        return $this->sendResponse(auth()->user() , 'Berhasil Login');
    }
}
